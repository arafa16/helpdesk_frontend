import React from "react";
import { styles } from "./style";
import {
  Page,
  Text,
  View,
  Document,
  PDFViewer,
  PDFDownloadLink,
  StyleSheet,
  Image,
  Svg,
} from "@react-pdf/renderer";
import dayjs from "dayjs";

const TemplateTicketReportPdf = (props: any) => {
  const { data } = props;

  console.log("data pdf", data);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View>
            <Text style={[styles.title, styles.textBold]}>
              {data?.display_name} - {data?.case_number}
            </Text>
          </View>
        </View>
        <View style={[styles.formatData]}>
          <View style={[styles.columnSpace]}>
            <View style={[styles.gapColumn]}>
              <Text>Ticket Number</Text>
              <Text>Case Number</Text>
              <Text>Customer</Text>
              <Text>Network Number</Text>
              <Text>Address</Text>
              <Text>Network Status</Text>
              <Text>PIC Customer</Text>
              <Text>PIC Executor</Text>
              <Text>Down Time</Text>
              <Text>Up Time</Text>
              <Text>Duration</Text>
              <Text>Total Duration</Text>
              <Text>Trouble Category</Text>
              <Text>Solution / Remarks</Text>
              <Text>New Cable</Text>
              <Text>External Pole</Text>
              <Text>New Pole Setup</Text>
              <Text>Open Cut</Text>
              <Text>Drilling</Text>
              <Text>New Closure</Text>
              <Text>New Splitter</Text>
              <Text>FO Jointing</Text>
              <Text>Old Datek</Text>
              <Text>New Datek</Text>
            </View>
            <View style={[styles.gapColumn]}>
              <Text>: {data?.display_name}</Text>
              <Text>: {data?.case_number}</Text>
              <Text>: {data?.customer?.name}</Text>
              <Text>: {data?.network_number}</Text>
              <Text>: {data?.address}</Text>
              <Text>: {data?.ticket_network_status?.name}</Text>
              <Text>: {data?.pic}</Text>
              <Text>: {data?.executor?.name}</Text>
              <Text>
                : {dayjs(data?.down_time).format("YYYY-MM-DD HH:mm:ss")}
              </Text>
              <Text>
                : {dayjs(data?.up_time).format("YYYY-MM-DD HH:mm:ss")}
              </Text>
              <Text>
                :{" "}
                {data?.ticket_activities
                  ?.reduce((sum: number, data: any) => {
                    if (
                      data?.ticket_status?.is_active === true &&
                      data?.start_date &&
                      data?.end_date
                    ) {
                      const start = dayjs(data.start_date);
                      const end = dayjs(data.end_date);
                      const hours = end.diff(start, "minute", true);
                      return sum + hours;
                    } else if (
                      data?.ticket_status?.is_active === true &&
                      data?.end_date === null
                    ) {
                      const start = dayjs(data.start_date);
                      const end = dayjs(Date.now());
                      const hours = end.diff(start, "minute", true);
                      return sum + hours;
                    }
                    return sum;
                  }, 0)
                  .toFixed(2)}{" "}
                Minute
              </Text>
              <Text>
                :{" "}
                {data?.ticket_activities
                  ?.reduce((sum: number, data: any) => {
                    if (
                      data?.ticket_status?.is_active === true &&
                      data?.start_date &&
                      data?.end_date
                    ) {
                      const start = dayjs(data.start_date);
                      const end = dayjs(data.end_date);
                      const hours = end.diff(start, "hour", true);
                      return sum + hours;
                    } else if (
                      data?.ticket_status?.is_active === true &&
                      data?.end_date === null
                    ) {
                      const start = dayjs(data.start_date);
                      const end = dayjs(Date.now());
                      const hours = end.diff(start, "hour", true);
                      return sum + hours;
                    }
                    return sum;
                  }, 0)
                  .toFixed(2)}{" "}
                Hour
              </Text>
              <Text>: {data?.ticket_category?.name}</Text>
              <Text>: {data?.solution}</Text>
              <Text>: {data?.new_cable}</Text>
              <Text>: {data?.external_pole}</Text>
              <Text>: {data?.new_pole_setup}</Text>
              <Text>: {data?.open_cut}</Text>
              <Text>: {data?.drilling}</Text>
              <Text>: {data?.new_closure}</Text>
              <Text>: {data?.new_splitter}</Text>
              <Text>: {data?.fo_jointing}</Text>
              <Text>: {data?.old_datek}</Text>
              <Text>: {data?.new_datek}</Text>
            </View>
          </View>
          <View
            style={[
              styles.columnSpace,
              {
                borderTop: 1,
                borderColor: "black",
                marginTop: "12px",
              },
            ]}
          >
            <View style={[styles.gapColumn, { marginTop: "12px" }]}>
              <Text>Update</Text>
            </View>
            <View style={[styles.gapColumn, { marginTop: "12px" }]}>
              <Text>: </Text>
            </View>
          </View>
          <View style={[styles.columnSpace]}>
            <View style={[styles.gapColumn, { marginTop: "12px" }]}>
              {data?.ticket_activities?.map((data: any, index: any) => (
                <View key={index}>
                  <Text>
                    {index + 1}. {dayjs(data?.start_date).format("HH:mm:ss")} -{" "}
                    {dayjs(
                      data?.end_date !== null ? data?.end_date : Date.now()
                    ).format("HH:mm:ss")}{" "}
                    - {data?.ticket_status?.name}
                  </Text>
                  {data?.ticket_activity_attachments.map(
                    (data_image: any, index: any) => (
                      <Image
                        key={index}
                        src={
                          import.meta.env.VITE_REACT_APP_API_URL +
                          data_image.file_url
                        }
                        style={[
                          {
                            width: "200px",
                            marginTop: "12px",
                            height: "auto",
                          },
                        ]}
                      />
                    )
                  )}
                  {data?.ticket_activity_comments.map(
                    (data_comment: any, index: any) => (
                      <View>
                        <Text
                          key={index}
                          style={[{ marginLeft: "12px", marginTop: "12px" }]}
                        >
                          - {data_comment?.description}
                        </Text>
                        {data_comment?.ticket_activity_comment_attachments?.map(
                          (data_image: any, index: any) => (
                            <Image
                              key={index}
                              src={
                                import.meta.env.VITE_REACT_APP_API_URL +
                                data_image.file_url
                              }
                              style={[
                                {
                                  width: "150px",
                                  marginTop: "12px",
                                  height: "auto",
                                },
                              ]}
                            />
                          )
                        )}
                      </View>
                    )
                  )}
                </View>
              ))}
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default TemplateTicketReportPdf;
