"use client";
import { Page, Text, View, Document } from "@react-pdf/renderer";

const PDFList = ({ attend }) => {
  return (
    <Document>
      <Page size="A4" style={{ paddingTop: 25, paddingBottom: 25, paddingLeft: 40, paddingRight: 40 }}>
        <View style={{ width: "100%", gap: 10}}>
          <Text style={{ fontSize: 15, fontWeight: "extrabold"}}>Quince años Giovana</Text>
          <Text style={{ fontSize: 13, fontWeight: "bold"}}>Invitados confirmados:</Text>
          {attend.length > 1 ? (
            <View style={{gap: 2, paddingLeft: 10}}>
              {attend.map((a, i) => {
                return (
                  <Text style={{ fontSize: 10}} key={i}>
                    {i+1} - {a.lastname} {a.firstname}{" "}
                    {a.amount_guests > 1
                      ? `  -    ( ${a.amount_guests} )`
                      : null}
                  </Text>
                );
              })}
            </View>
          ) : null}
        </View>
      </Page>
    </Document>
  );
};
export default PDFList;
