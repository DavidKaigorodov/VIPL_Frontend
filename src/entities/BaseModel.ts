import axios from "axios";

export class BaseModel {
  // ### Свойства
  // ##################################################
  public static API = axios.create({ baseURL: "" });

  public attributes = [];
  public fillable = [];
  public displayed = [];

  protected props = {};
  protected origin = {}

  // ### Конструктор
  // ##################################################
  constructor() {}

  // ### Защищенные методы
  // ##################################################
  protected static parse(attrs) // HACK :Object typeof BaseModel
  {
    let obj = new this()

    obj.attributes.forEach((attribute) => {
      //DEV добавить валидацию attributes
      let name = attribute.name;
      let relation = attribute["relation"];
      let isRelation =
        relation !== undefined && relation.prototype instanceof BaseModel;
      
      let value = isRelation
        ? relation.parse(attrs[attribute.name])
        : attrs[attribute.name];

      obj.origin[name] = value
      obj.props[name] = value

      Object.defineProperty(obj, name, {
        get: function() {
          return this.props[name]
        },
        set: function(value) {
          this.props[name] = value
        }
      })
    });

    return obj;
  }

  // ### Вызовы API
  // ##################################################
  // HACK добавить валидацию ответов
  public static async paginate(paginate: number = 50) // HACK :Response
  {
    let response = await this.API.get('', { params: { paginate } });
    let data = response.data;

    data.data = data.data.map((record) => this.parse(record));

    return data;
  }

  public static async getAny() // HACK :Array[Object typeof BaseModel]
  {
    let response = await this.API.get('');

    return response.data.data.map((record) => this.parse(record));
  }

  public static async create(attributes: object) // HACK :Object typeof BaseModel
  {
    // HACK добавить аплидацию аттрибутов через fillable
    let response = await this.API.post('', attributes);

    return this.parse(response.data.data);
  }

  public static async whereKey(key: number | string) // HACK :Object typeof BaseModel
  {
    let response = await this.API.get(`/${key}`);

    return this.parse(response.data.data);
  }

  public async update(attributes: object) // HACK :Object typeof BaseModel
  {
    let response = await this.constructor.API.put(`/${this.id}`, attributes);
    
    return this.constructor.parse(response.data.data);
  }

  public async destroy() // HACK :bool
  {
    let response = await this.constructor.API.delete(`/${this.id}`);

    return response.status === 200
  }

  // ### доп методы
  // ##################################################
  public async save() // HACK :Object typeof BaseModel
  {
    return await this.update(this.props)
  }
}
