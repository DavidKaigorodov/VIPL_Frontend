<script>
import { defineComponent } from 'vue';
import { ModelTable } from "@/widgets/moduleTable";
import { Bank } from "@/entities/division/Bank"

export default defineComponent({
    components: {
        ModelTable
    },
    async mounted(){
        let any = await Bank.getAny()
        let paginate = await Bank.paginate()
        let bank = await Bank.create({code: 'code', name: 'name', contract_id: 1})
        
        await Bank.whereKey(bank.id);
        await bank.update({code: 'code', name: 'name', contract_id: 1})
        await bank.destroy()

        // Пример с изменением свойства и его сохранением
        console.log(bank.code);
        bank.code = 'test code'
        await bank.save()
        console.log(bank.code);
    }   
});
</script>

<template>
    test page
</template>