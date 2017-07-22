import { Component, OnInit } from '@angular/core';
import { Data }    from './model/data';
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {

    model = new Data(1, '1', '1', '1', '1', '1', '1', '1', '1', '1', '1');

    submitted = false;

    onSubmit() {
      this.submitted = true;
      this.createPdf(this.model);
    }

    newData() {
      this.model = new Data(42, '', '', '', '', '', '', '', '', '', '');
    }

    createPdf(data : Data){
      let docDefinition =         {
          styles: {
            'header': {
              fontSize: 22,
              bold: true,
              alignment: 'center'
            },
            'sub-header': {
              fontSize: 18,
              alignment: 'center'
            },
            'sub-sub-header': {
              fontSize: 14,
              alignment: 'center'
            },
            'small': {
              fontSize: 8
            }
          },
        content: [
              { text: 'SISTEMA GESTIÓN DE CALIDAD' , style: 'header' },
              { text: 'UNIVERSIDAD NACIONAL', style: 'sub-header' },
              { text: 'SEDE BOGOTA\n\n', style: 'sub-header', margin: [ 0, 0, 0, 20 ] },
              
              { text: 'INFORME EVALUACIÓN DE LA GESTIÓN DEL RIESGO\n\n\n', style: 'sub-sub-header' },

              {
               columns: [
                  {
                    // auto-sized columns have their widths based on their content
                    width: '50%',
                    text: 'MACROPROCESO-PROCESO:\nGestión del Talento Humano'
                  },
                  {
                    // star-sized columns fill the remaining space
                    // if there's more than one star-column, available width is divided equally
                    width: '50%',
                    text: 'VIGENCIA:\n'+this.model.vigencia +'\n\n\n'
                  }
                ],
                // optional space between columns
                columnGap: 10
              },
              {
                table: {
                  // headers are automatically repeated if the table spans over multiple pages
                  // you can declare how many rows should be treated as headers
                  headerRows: 1,

                  body: [
                    [ { text: 'PARÁMETRO A EVALUAR', width: '50%', bold: true }, { text: 'RESULTADO', width: '50%', bold: true }],
                    [ {text:['1. PORCENTAJE DE RIESGOS SIGNIFICATIVOS IDENTIFICADOS (%) ',{ text: '\n(Numero de riesgos identificados como significativos/ Numero de riesgos totales identificados )*100.', style: 'small' }]}, this.model.porcentajeRiesgos],
                    [ {text:['2. PORCENTAJE DE RIESGOS MINIMIZADOS (%)  ',{ text: '\n((Número de riesgos significativos identificados en el año anterior - Número de riesgos significativos identificados en el año en vigencia)/Número de riesgos significativos identificados en el año anterior) *100.', style: 'small' }]}, this.model.porcentajeRiesgos],
                    [ {text:['3. PORCENTAJE DE EFECTIVIDAD DE LOS CONTROLES (%)  ',{ text: '\n(Número de controles calificados como efectivos( definido, documentado, implementado, socializado y evaluado)/Número total de controles asociados)*100.', style: 'small' }]}, this.model.porcentajeEfectividad],
                    [ {text:['4. PORCENTAJE DE EJECUCIÓN DE PLANES DE TRATAMIENTO (%)  ',{ text: '\n(Número de acciones ejecutadas/Numero de acciones establecidas)*100.', style: 'small' }]}, this.model.riesgoMaterializado],
                    [ '5. RIESGO MATERIALIZADO', this.model.riesgoMaterializado],
                    [ '5.1 ACCIÓN CORRECTIVA APLICADA', this.model.accionCorrectiva],
                    [ '6. RIESGOS QUE SE MANTIENEN', this.model.riesgoMantiene],
                    [ '7. MEJORAS A INCORPORAR (CONTROLES/ACCIONES)', this.model.mejorasIncorporar],
                    [ '8. NUEVOS RIESGOS IDENTIFICADOS', this.model.nuevosRiesgos],
                    [ 'Elaborado por:\n'+this.model.elaboradoPor, 'Revisado y Aprobado por:\n']
                  ]
                }
              }
          ]
      };
      let pdf = pdfMake.createPdf(docDefinition);
      pdf.download('InformeEvaluacionRiesgo.pdf');
    }

    createContentToData(data: Data) {
      return [
        
{
          styles: {
            'header': {
              fontSize: 22,
              bold: true,
              alignment: 'center'
            },
            'sub-header': {
              fontSize: 18,
              alignment: 'center'
            },
            'sub-sub-header': {
              fontSize: 14,
              alignment: 'center'
            },
            'small': {
              fontSize: 8
            }
          },
        content: [
              { text: 'SISTEMA GESTIÓN DE CALIDAD' , style: 'header' },
              { text: 'UNIVERSIDAD NACIONAL', style: 'sub-header' },
              { text: 'SEDE BOGOTA\n\n', style: 'sub-header', margin: [ 0, 0, 0, 20 ] },
              
              { text: 'INFORME EVALUACIÓN DE LA GESTIÓN DEL RIESGO\n\n\n', style: 'sub-sub-header' },

              {
               columns: [
                  {
                    // auto-sized columns have their widths based on their content
                    width: '50%',
                    text: 'MACROPROCESO-PROCESO:\nGestión del Talento Humano'
                  },
                  {
                    // star-sized columns fill the remaining space
                    // if there's more than one star-column, available width is divided equally
                    width: '50%',
                    text: 'VIGENCIA:\n'+this.model.vigencia +'\n\n\n'
                  }
                ],
                // optional space between columns
                columnGap: 10
              },
              {
                table: {
                  // headers are automatically repeated if the table spans over multiple pages
                  // you can declare how many rows should be treated as headers
                  headerRows: 1,

                  body: [
                    [ { text: 'PARÁMETRO A EVALUAR', width: '50%', bold: true }, { text: 'RESULTADO', width: '50%', bold: true }],
                    [ {text:['1. PORCENTAJE DE RIESGOS SIGNIFICATIVOS IDENTIFICADOS (%) ',{ text: '\n(Numero de riesgos identificados como significativos/ Numero de riesgos totales identificados )*100.', style: 'small' }]}, this.model.porcentajeRiesgos],
                    [ {text:['2. PORCENTAJE DE RIESGOS MINIMIZADOS (%)  ',{ text: '\n((Número de riesgos significativos identificados en el año anterior - Número de riesgos significativos identificados en el año en vigencia)/Número de riesgos significativos identificados en el año anterior) *100.', style: 'small' }]}, this.model.porcentajeRiesgos],
                    [ {text:['3. PORCENTAJE DE EFECTIVIDAD DE LOS CONTROLES (%)  ',{ text: '\n(Número de controles calificados como efectivos( definido, documentado, implementado, socializado y evaluado)/Número total de controles asociados)*100.', style: 'small' }]}, this.model.porcentajeEfectividad],
                    [ {text:['4. PORCENTAJE DE EJECUCIÓN DE PLANES DE TRATAMIENTO (%)  ',{ text: '\n(Número de acciones ejecutadas/Numero de acciones establecidas)*100.', style: 'small' }]}, this.model.riesgoMaterializado],
                    [ '5. RIESGO MATERIALIZADO', this.model.riesgoMaterializado],
                    [ '5.1 ACCIÓN CORRECTIVA APLICADA', this.model.accionCorrectiva],
                    [ '6. RIESGOS QUE SE MANTIENEN', this.model.riesgoMantiene],
                    [ '7. MEJORAS A INCORPORAR (CONTROLES/ACCIONES)', this.model.mejorasIncorporar],
                    [ '8. NUEVOS RIESGOS IDENTIFICADOS', this.model.nuevosRiesgos],
                    [ 'Elaborado por:\n'+this.model.elaboradoPor, 'Revisado y Aprobado por:\n']
                  ]
                }
              }
          ]
      }
        ]
    }
  }

