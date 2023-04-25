import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import styles from './guestsList.module.css'

export default function GuestsListPDF({ attend }) {
    
  let medList = Math.floor(attend.length / 2)

  let count =  0
  
  attend.forEach((g)=>count+=g.amount_confirm)

  async function generarPDF() {
    // Crea un nuevo documento PDF
    const pdfDoc = await PDFDocument.create();

    // Agrega una nueva página al documento
    const page1 = pdfDoc.addPage();

    // Obtiene la fuente por defecto
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // Define la posición inicial de la lista
    let y = 760;


    // Agrega cada invitado a la lista
    attend.slice(0, medList).forEach((invitado,i) => {
      // Agrega el nombre del invitado a la página
      page1.drawText((i+1) + "- " + invitado.firstname + " " + invitado.lastname + " - ("+invitado.amount_confirm +")", {
        x: 50,
        y: y,
        size: 12,
        font: font,
      });

      // Disminuye la posición Y para la siguiente línea
      y -= 20;
    });

    page1.drawText('Lista de Invitados ' + '('+count+')', {
      x: 50,
      y: 800,
      size: 16,
      font: font,
      color: rgb(0, 0, 0),
    });

    if (attend.length > medList) {
        // Define la posición inicial de la segunda página
        y = 780;
        const page2 = pdfDoc.addPage();
        // Agrega los últimos invitados a la segunda página
        attend.slice(medList).forEach((invitado,i) => {
          // Agrega el nombre del invitado a la página
          page2.drawText((i+ medList + 1) + "- " + invitado.firstname + " " + invitado.lastname + " - (" +invitado.amount_confirm+")", {
            x: 50,
            y: y,
            size: 12,
            font: font,
          });
  
          // Disminuye la posición Y para la siguiente línea
          y -= 20;
        });
      }


    // Guarda el documento en un ArrayBuffer
    const pdfBytes = await pdfDoc.save();

    // Crea un objeto Blob con los bytes del documento
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });

    // Crea un objeto URL a partir del objeto Blob
    const url = URL.createObjectURL(blob);

    // Abre el PDF en una nueva ventana del navegador
    window.open(url);
  }

  return (
    <div>
      <div onClick={generarPDF} className={styles.btn}>Generar pdf</div>
      {/* <ul>
        {attend.map((invitado) => (
          <li key={invitado.firstname}>{invitado.firstname + " " + invitado.lastname}</li>
        ))}
      </ul> */}
    </div>
  );
}
