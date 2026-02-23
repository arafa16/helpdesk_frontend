import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    color: "#262626",
    fontFamily: "Helvetica",
    fontSize: "12px",
    padding: "30px 50px",
  },
  qrcode: {
    position: "absolute",
    right: "20px",
    top: "20px",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 14,
  },
  title: {
    fontSize: 12,
    marginBottom: 4,
    borderBottom: 0.5,
  },
  textBold: {
    fontFamily: "Helvetica-Bold",
  },
  formatData: {
    fontSize: "9px",
  },
  columnSpace: {
    display: "flex",
    flexDirection: "row",
    gap: "30px",
  },
  gapColumn: {
    gap: "10px",
  },
  signPosition: {
    display: "flex",
    flexDirection: "row",
    gap: "64px",
    marginBottom: 30,
  },
  signFormat: {
    fontSize: "9px",
    display: "flex",
    flexDirection: "column",
    gap: "64px",
  },
  signGap: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    width: "48%", // Slightly less than 50% for spacing
    marginBottom: 10,
    padding: 10,
    border: "1px solid #ccc",
  },
});

export const styles2 = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    color: "#262626",
    fontFamily: "Helvetica",
    fontSize: "8px",
    padding: "30px 50px",
    size: "A4",
  },
  header: {
    marginBottom: 20,
    backgroundColor: "#f0f0f0",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 14,
    fontSize: 10,
    fontWeight: "bold",
  },
  title_icon: {
    width: 50,
    height: 50,
  },
  title_table: { width: "50%", border: "0px solid transparent", gap: "4px" },
  container: {
    flexDirection: "row",
    flexWrap: "wrap", // Allows columns to wrap
    justifyContent: "space-between",
    gap: "10px",
  },
  column: {
    width: "45%", // Slightly less than 50% for spacing
    marginBottom: 10,
    padding: 10,
    border: "1px solid #ccc",
    justifyContent: "space-between",
  },
  column_desc: {
    marginTop: 4,
    textAlign: "center",
    fontSize: 7,
    border: "1px solid #ccc",
    padding: 2,
  },
});
