import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import { Table, TR, TD } from "@ag-media/react-pdf-table";
import logoDarkUrl from "../../assets/images/logo/logo_kopkarla_color.png";
import { styles2 as styles } from "./style";

const TemplateTicketReportPdf2 = (props: any) => {
  const { data } = props;

  let datas: any = [];

  data?.ticket_activities?.forEach((activity: any) => {
    if (activity?.ticket_activity_attachments) {
      activity?.ticket_activity_attachments?.forEach((attachment: any) => {
        datas.push({
          uuid: attachment.uuid,
          file_url: attachment.file_url,
          desc: activity.description,
        });
      });
    }
    activity?.ticket_activity_comments?.forEach((comment: any) => {
      if (comment?.ticket_activity_comment_attachments) {
        comment?.ticket_activity_comment_attachments?.forEach(
          (attachment: any) => {
            datas.push({
              uuid: attachment.uuid,
              file_url: attachment.file_url,
              desc: comment.description,
            });
          },
        );
      }
    });
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View>
            <Image src={logoDarkUrl} style={styles.title_icon} />
          </View>
          <Table style={styles.title_table}>
            <TR>
              <TD>Nama Kegiatan</TD>
              <TD>: {data?.subject}</TD>
            </TR>
            <TR>
              <TD>Nama Pelanggan</TD>
              <TD>: {data?.customer?.name}</TD>
            </TR>
            <TR>
              <TD>Alamat</TD>
              <TD>: {data?.address}</TD>
            </TR>
            <TR>
              <TD>Nomor Jaringan</TD>
              <TD>: {data?.network_number}</TD>
            </TR>
          </Table>
        </View>
        <View style={styles.title}>
          <Text>DOKUMENTASI</Text>
        </View>
        <View style={styles.container}>
          {datas?.map((item: any, index: any) => (
            <View key={index} style={styles.column}>
              <Image
                src={import.meta.env.VITE_REACT_APP_API_URL + item.file_url}
              />
              <View style={styles.column_desc}>
                <Text>{item.desc}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default TemplateTicketReportPdf2;
