import React from "react";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style"

export default function Excel({Data, filename}){

    console.log("d",Data);

    const filetype = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtention = '.xlsx';

    const ExportToExcel = async() =>{

        const ws = XLSX.utils.json_to_sheet(Data);

        const wb = {Sheets : { 'data' : ws }, SheetNames: ['data'] };

        const ExcelBuffer = XLSX.write(wb, {bookType : 'xlsx', type : 'array'});

        const data = new Blob([ExcelBuffer], {type: filetype});

        FileSaver.saveAs(data, filename + fileExtention);


    }
    return(
        <div>
            
            <button onClick={(e) => ExportToExcel(filename)}>Excel Export</button>
        </div>
        

    )
}