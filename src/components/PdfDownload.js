import React from "react"
import '../styles/global.css'
import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

export function PdfDownload() {
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'row'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

  return (
     <Document>
     <Page size="A4" style={styles.page}>
       <View style={styles.section}>
         <Text>前身國外業務的我，善於維護客戶關係，也曾為小組的領頭羊，帶領組員一起完成任務。我善於部門內與跨部門的合作，也是個遇到卡關太久的障礙會盡快尋求協助的效率人。因為愛上了寫程式可以自動化工作某些太過重複的痠痛過程，選擇轉向仍舊靠近客戶端的網頁前端發展。閒暇時喜歡跳舞及畫畫，也利用了待業期間籌辦過追星應援活動，以及持續經營自己的繪帳，在寫程式之餘，保有美感及生活哲學。</Text>
       </View>
       <View style={styles.section}>
         <Text>測試</Text>
       </View>
     </Page>
   </Document>
  )
}

export function PdfDownloadBtn() {
  return (
    <div>
      <PDFDownloadLink document={<PdfDownload />} fileName="facina-cv.pdf">
        {({ blob, url, loading, error }) =>
          loading ? '文件準備中...' : '立刻下載'
        }
      </PDFDownloadLink>
    </div>
  );
}




