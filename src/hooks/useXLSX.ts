import { ProTableOption } from 'procomponent-tdesign-vue';
import { ref } from 'vue';
import * as XLSX from 'xlsx';

function useXLSX(options: Array<ProTableOption | { title: string, key: string }>) {

    const xlsx = ref<XLSX.XLSX$Utils>(XLSX.utils);

    function getXLSXTitle() {
        const titles = options.map(item => item.title);
        return titles;
    }

    function doExport(data: any[], name: string) {
        const xlsxWB = xlsx.value.book_new();
        const xlsxWS = xlsx.value.aoa_to_sheet([
            ["SheetJS", "<3", "விரிதாள்"],
            [72, , "Arbeitsblätter"],
            [, 62, "数据"],
            [true, false,],
        ]);
        XLSX.utils.book_append_sheet(xlsxWB, xlsxWS, "Sheet1");
        XLSX.writeFile(xlsxWB, "textport.numbers", { compression: true });
    }

    return [xlsx, doExport];
}