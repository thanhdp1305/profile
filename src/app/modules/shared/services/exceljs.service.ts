import { Injectable } from '@angular/core';
import { Workbook } from 'exceljs';

@Injectable()
export class ExcelJsService {
  workbook = new Workbook();

  constructor() {
    //
  }

  createWorkBook(header: string[], data: any[], fileName = 'bao-cao'): void {
    // Create workbook and worksheet
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Báo cáo');

    // Add Header Row
    const headerRow = worksheet.addRow(header);

    // Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFF00' },
        bgColor: { argb: 'FF0000FF' },
      };
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' },
      };
    });

    data.forEach((d, index) => {
      const row = worksheet.addRow(d);
    });

    // // Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data: any) => {
      const blob = new Blob([data], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });

      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.download = `${fileName}.xlsx`;
      anchor.href = url;
      anchor.click();
    });
  }
}
