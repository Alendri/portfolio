export const x = {
  columns: [
    //00 Rest, 0010 Stockholm, 0020 Göteborg, 0030 Malmö
    { code: 'Region', text: 'region', type: 'd' },
    //<1940, 1960, 1980, 2000, 2010, 2020, 2021+
    { code: 'ByggAr', text: 'byggår', type: 'd' },
    { code: 'Agarkategori', text: 'ägarkategori', type: 'd' },
    { code: 'Hyresuppg', text: 'hyresuppgift', type: 'd' },
    { code: 'Tid', text: 'år', type: 't' },
    //Årshyra per kvm
    {
      code: 'Medelhyra i hyreslägenhet ',
      text: 'Medelhyra i hyreslägenhet ',
      type: 'c',
    },
  ],
  comments: [],
  data: [
    { key: ['00', '1', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['1126'] },
    { key: ['00', '1', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['1159'] },
    { key: ['00', '1', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['1172'] },
    { key: ['00', '1', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['1208'] },
    { key: ['00', '1', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['1239'] },
    { key: ['00', '1', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['1262'] },
    { key: ['00', '1', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1299'] },
    { key: ['00', '1', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['1352'] },
    { key: ['00', '1', 'ALLMNB', 'Ah_kvm', '2016'], values: ['1088'] },
    { key: ['00', '1', 'ALLMNB', 'Ah_kvm', '2017'], values: ['1092'] },
    { key: ['00', '1', 'ALLMNB', 'Ah_kvm', '2018'], values: ['1122'] },
    { key: ['00', '1', 'ALLMNB', 'Ah_kvm', '2019'], values: ['1141'] },
    { key: ['00', '1', 'ALLMNB', 'Ah_kvm', '2020'], values: ['1159'] },
    { key: ['00', '1', 'ALLMNB', 'Ah_kvm', '2021'], values: ['1204'] },
    { key: ['00', '1', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1234'] },
    { key: ['00', '1', 'ALLMNB', 'Ah_kvm', '2023'], values: ['1286'] },
    { key: ['00', '2', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['1067'] },
    { key: ['00', '2', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['1093'] },
    { key: ['00', '2', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['1122'] },
    { key: ['00', '2', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['1162'] },
    { key: ['00', '2', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['1198'] },
    { key: ['00', '2', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['1219'] },
    { key: ['00', '2', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1250'] },
    { key: ['00', '2', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['1303'] },
    { key: ['00', '2', 'ALLMNB', 'Ah_kvm', '2016'], values: ['1040'] },
    { key: ['00', '2', 'ALLMNB', 'Ah_kvm', '2017'], values: ['1048'] },
    { key: ['00', '2', 'ALLMNB', 'Ah_kvm', '2018'], values: ['1066'] },
    { key: ['00', '2', 'ALLMNB', 'Ah_kvm', '2019'], values: ['1087'] },
    { key: ['00', '2', 'ALLMNB', 'Ah_kvm', '2020'], values: ['1113'] },
    { key: ['00', '2', 'ALLMNB', 'Ah_kvm', '2021'], values: ['1134'] },
    { key: ['00', '2', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1161'] },
    { key: ['00', '2', 'ALLMNB', 'Ah_kvm', '2023'], values: ['1220'] },
    { key: ['00', '3', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['1021'] },
    { key: ['00', '3', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['1048'] },
    { key: ['00', '3', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['1075'] },
    { key: ['00', '3', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['1109'] },
    { key: ['00', '3', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['1139'] },
    { key: ['00', '3', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['1175'] },
    { key: ['00', '3', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1207'] },
    { key: ['00', '3', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['1266'] },
    { key: ['00', '3', 'ALLMNB', 'Ah_kvm', '2016'], values: ['947'] },
    { key: ['00', '3', 'ALLMNB', 'Ah_kvm', '2017'], values: ['958'] },
    { key: ['00', '3', 'ALLMNB', 'Ah_kvm', '2018'], values: ['972'] },
    { key: ['00', '3', 'ALLMNB', 'Ah_kvm', '2019'], values: ['993'] },
    { key: ['00', '3', 'ALLMNB', 'Ah_kvm', '2020'], values: ['1018'] },
    { key: ['00', '3', 'ALLMNB', 'Ah_kvm', '2021'], values: ['1041'] },
    { key: ['00', '3', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1065'] },
    { key: ['00', '3', 'ALLMNB', 'Ah_kvm', '2023'], values: ['1115'] },
    { key: ['00', '4', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['1077'] },
    { key: ['00', '4', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['1076'] },
    { key: ['00', '4', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['1100'] },
    { key: ['00', '4', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['1106'] },
    { key: ['00', '4', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['1128'] },
    { key: ['00', '4', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['1141'] },
    { key: ['00', '4', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1174'] },
    { key: ['00', '4', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['1222'] },
    { key: ['00', '4', 'ALLMNB', 'Ah_kvm', '2016'], values: ['1028'] },
    { key: ['00', '4', 'ALLMNB', 'Ah_kvm', '2017'], values: ['1043'] },
    { key: ['00', '4', 'ALLMNB', 'Ah_kvm', '2018'], values: ['1052'] },
    { key: ['00', '4', 'ALLMNB', 'Ah_kvm', '2019'], values: ['1076'] },
    { key: ['00', '4', 'ALLMNB', 'Ah_kvm', '2020'], values: ['1094'] },
    { key: ['00', '4', 'ALLMNB', 'Ah_kvm', '2021'], values: ['1116'] },
    { key: ['00', '4', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1141'] },
    { key: ['00', '4', 'ALLMNB', 'Ah_kvm', '2023'], values: ['1184'] },
    { key: ['00', '5', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['1436'] },
    { key: ['00', '5', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['1457'] },
    { key: ['00', '5', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['1469'] },
    { key: ['00', '5', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['1483'] },
    { key: ['00', '5', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['1517'] },
    { key: ['00', '5', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['1530'] },
    { key: ['00', '5', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1541'] },
    { key: ['00', '5', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['1588'] },
    { key: ['00', '5', 'ALLMNB', 'Ah_kvm', '2016'], values: ['1421'] },
    { key: ['00', '5', 'ALLMNB', 'Ah_kvm', '2017'], values: ['1427'] },
    { key: ['00', '5', 'ALLMNB', 'Ah_kvm', '2018'], values: ['1441'] },
    { key: ['00', '5', 'ALLMNB', 'Ah_kvm', '2019'], values: ['1457'] },
    { key: ['00', '5', 'ALLMNB', 'Ah_kvm', '2020'], values: ['1473'] },
    { key: ['00', '5', 'ALLMNB', 'Ah_kvm', '2021'], values: ['1508'] },
    { key: ['00', '5', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1541'] },
    { key: ['00', '5', 'ALLMNB', 'Ah_kvm', '2023'], values: ['1613'] },
    { key: ['00', '6', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['1656'] },
    { key: ['00', '6', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['1722'] },
    { key: ['00', '6', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['1758'] },
    { key: ['00', '6', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['1784'] },
    { key: ['00', '6', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['1833'] },
    { key: ['00', '6', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['1851'] },
    { key: ['00', '6', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1877'] },
    { key: ['00', '6', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['1930'] },
    { key: ['00', '6', 'ALLMNB', 'Ah_kvm', '2016'], values: ['1574'] },
    { key: ['00', '6', 'ALLMNB', 'Ah_kvm', '2017'], values: ['1567'] },
    { key: ['00', '6', 'ALLMNB', 'Ah_kvm', '2018'], values: ['1617'] },
    { key: ['00', '6', 'ALLMNB', 'Ah_kvm', '2019'], values: ['1647'] },
    { key: ['00', '6', 'ALLMNB', 'Ah_kvm', '2020'], values: ['1687'] },
    { key: ['00', '6', 'ALLMNB', 'Ah_kvm', '2021'], values: ['1717'] },
    { key: ['00', '6', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1744'] },
    { key: ['00', '6', 'ALLMNB', 'Ah_kvm', '2023'], values: ['1793'] },
    { key: ['00', '7', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['..'] },
    { key: ['00', '7', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['..'] },
    { key: ['00', '7', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['..'] },
    { key: ['00', '7', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['..'] },
    { key: ['00', '7', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['..'] },
    { key: ['00', '7', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['..'] },
    { key: ['00', '7', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1959'] },
    { key: ['00', '7', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['1936'] },
    { key: ['00', '7', 'ALLMNB', 'Ah_kvm', '2016'], values: ['..'] },
    { key: ['00', '7', 'ALLMNB', 'Ah_kvm', '2017'], values: ['..'] },
    { key: ['00', '7', 'ALLMNB', 'Ah_kvm', '2018'], values: ['..'] },
    { key: ['00', '7', 'ALLMNB', 'Ah_kvm', '2019'], values: ['..'] },
    { key: ['00', '7', 'ALLMNB', 'Ah_kvm', '2020'], values: ['..'] },
    { key: ['00', '7', 'ALLMNB', 'Ah_kvm', '2021'], values: ['..'] },
    { key: ['00', '7', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1832'] },
    { key: ['00', '7', 'ALLMNB', 'Ah_kvm', '2023'], values: ['1889'] },
    { key: ['0010', '1', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['1389'] },
    { key: ['0010', '1', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['1405'] },
    { key: ['0010', '1', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['1427'] },
    { key: ['0010', '1', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['1467'] },
    { key: ['0010', '1', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['1512'] },
    { key: ['0010', '1', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['1536'] },
    { key: ['0010', '1', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1582'] },
    { key: ['0010', '1', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['1682'] },
    { key: ['0010', '1', 'ALLMNB', 'Ah_kvm', '2016'], values: ['1299'] },
    { key: ['0010', '1', 'ALLMNB', 'Ah_kvm', '2017'], values: ['1308'] },
    { key: ['0010', '1', 'ALLMNB', 'Ah_kvm', '2018'], values: ['1345'] },
    { key: ['0010', '1', 'ALLMNB', 'Ah_kvm', '2019'], values: ['1328'] },
    { key: ['0010', '1', 'ALLMNB', 'Ah_kvm', '2020'], values: ['1313'] },
    { key: ['0010', '1', 'ALLMNB', 'Ah_kvm', '2021'], values: ['1434'] },
    { key: ['0010', '1', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1478'] },
    { key: ['0010', '1', 'ALLMNB', 'Ah_kvm', '2023'], values: ['1532'] },
    { key: ['0010', '2', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['1246'] },
    { key: ['0010', '2', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['1291'] },
    { key: ['0010', '2', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['1319'] },
    { key: ['0010', '2', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['1384'] },
    { key: ['0010', '2', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['1442'] },
    { key: ['0010', '2', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['1472'] },
    { key: ['0010', '2', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1505'] },
    { key: ['0010', '2', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['1549'] },
    { key: ['0010', '2', 'ALLMNB', 'Ah_kvm', '2016'], values: ['1130'] },
    { key: ['0010', '2', 'ALLMNB', 'Ah_kvm', '2017'], values: ['1145'] },
    { key: ['0010', '2', 'ALLMNB', 'Ah_kvm', '2018'], values: ['1153'] },
    { key: ['0010', '2', 'ALLMNB', 'Ah_kvm', '2019'], values: ['1173'] },
    { key: ['0010', '2', 'ALLMNB', 'Ah_kvm', '2020'], values: ['1183'] },
    { key: ['0010', '2', 'ALLMNB', 'Ah_kvm', '2021'], values: ['1201'] },
    { key: ['0010', '2', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1224'] },
    { key: ['0010', '2', 'ALLMNB', 'Ah_kvm', '2023'], values: ['1292'] },
    { key: ['0010', '3', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['1080'] },
    { key: ['0010', '3', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['1116'] },
    { key: ['0010', '3', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['1172'] },
    { key: ['0010', '3', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['1206'] },
    { key: ['0010', '3', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['1248'] },
    { key: ['0010', '3', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['1291'] },
    { key: ['0010', '3', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1333'] },
    { key: ['0010', '3', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['1385'] },
    { key: ['0010', '3', 'ALLMNB', 'Ah_kvm', '2016'], values: ['1024'] },
    { key: ['0010', '3', 'ALLMNB', 'Ah_kvm', '2017'], values: ['1055'] },
    { key: ['0010', '3', 'ALLMNB', 'Ah_kvm', '2018'], values: ['1050'] },
    { key: ['0010', '3', 'ALLMNB', 'Ah_kvm', '2019'], values: ['1081'] },
    { key: ['0010', '3', 'ALLMNB', 'Ah_kvm', '2020'], values: ['1110'] },
    { key: ['0010', '3', 'ALLMNB', 'Ah_kvm', '2021'], values: ['1130'] },
    { key: ['0010', '3', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1151'] },
    { key: ['0010', '3', 'ALLMNB', 'Ah_kvm', '2023'], values: ['1199'] },
    { key: ['0010', '4', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['1308'] },
    { key: ['0010', '4', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['1294'] },
    { key: ['0010', '4', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['1338'] },
    { key: ['0010', '4', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['1346'] },
    { key: ['0010', '4', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['1359'] },
    { key: ['0010', '4', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['1380'] },
    { key: ['0010', '4', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1420'] },
    { key: ['0010', '4', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['1494'] },
    { key: ['0010', '4', 'ALLMNB', 'Ah_kvm', '2016'], values: ['1123'] },
    { key: ['0010', '4', 'ALLMNB', 'Ah_kvm', '2017'], values: ['1159'] },
    { key: ['0010', '4', 'ALLMNB', 'Ah_kvm', '2018'], values: ['1152'] },
    { key: ['0010', '4', 'ALLMNB', 'Ah_kvm', '2019'], values: ['1175'] },
    { key: ['0010', '4', 'ALLMNB', 'Ah_kvm', '2020'], values: ['1210'] },
    { key: ['0010', '4', 'ALLMNB', 'Ah_kvm', '2021'], values: ['1235'] },
    { key: ['0010', '4', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1251'] },
    { key: ['0010', '4', 'ALLMNB', 'Ah_kvm', '2023'], values: ['1298'] },
    { key: ['0010', '5', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['1682'] },
    { key: ['0010', '5', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['1694'] },
    { key: ['0010', '5', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['1746'] },
    { key: ['0010', '5', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['1751'] },
    { key: ['0010', '5', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['1757'] },
    { key: ['0010', '5', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['1726'] },
    { key: ['0010', '5', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1737'] },
    { key: ['0010', '5', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['1811'] },
    { key: ['0010', '5', 'ALLMNB', 'Ah_kvm', '2016'], values: ['1566'] },
    { key: ['0010', '5', 'ALLMNB', 'Ah_kvm', '2017'], values: ['1599'] },
    { key: ['0010', '5', 'ALLMNB', 'Ah_kvm', '2018'], values: ['1596'] },
    { key: ['0010', '5', 'ALLMNB', 'Ah_kvm', '2019'], values: ['1590'] },
    { key: ['0010', '5', 'ALLMNB', 'Ah_kvm', '2020'], values: ['1625'] },
    { key: ['0010', '5', 'ALLMNB', 'Ah_kvm', '2021'], values: ['1686'] },
    { key: ['0010', '5', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1730'] },
    { key: ['0010', '5', 'ALLMNB', 'Ah_kvm', '2023'], values: ['1806'] },
    { key: ['0010', '6', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['1703'] },
    { key: ['0010', '6', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['1796'] },
    { key: ['0010', '6', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['1888'] },
    { key: ['0010', '6', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['1919'] },
    { key: ['0010', '6', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['1998'] },
    { key: ['0010', '6', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['2058'] },
    { key: ['0010', '6', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['2112'] },
    { key: ['0010', '6', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['2165'] },
    { key: ['0010', '6', 'ALLMNB', 'Ah_kvm', '2016'], values: ['1712'] },
    { key: ['0010', '6', 'ALLMNB', 'Ah_kvm', '2017'], values: ['1708'] },
    { key: ['0010', '6', 'ALLMNB', 'Ah_kvm', '2018'], values: ['1794'] },
    { key: ['0010', '6', 'ALLMNB', 'Ah_kvm', '2019'], values: ['1839'] },
    { key: ['0010', '6', 'ALLMNB', 'Ah_kvm', '2020'], values: ['1863'] },
    { key: ['0010', '6', 'ALLMNB', 'Ah_kvm', '2021'], values: ['1945'] },
    { key: ['0010', '6', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1969'] },
    { key: ['0010', '6', 'ALLMNB', 'Ah_kvm', '2023'], values: ['2009'] },
    { key: ['0010', '7', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['..'] },
    { key: ['0010', '7', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['..'] },
    { key: ['0010', '7', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['..'] },
    { key: ['0010', '7', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['..'] },
    { key: ['0010', '7', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['..'] },
    { key: ['0010', '7', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['..'] },
    { key: ['0010', '7', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['2219'] },
    { key: ['0010', '7', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['2233'] },
    { key: ['0010', '7', 'ALLMNB', 'Ah_kvm', '2016'], values: ['..'] },
    { key: ['0010', '7', 'ALLMNB', 'Ah_kvm', '2017'], values: ['..'] },
    { key: ['0010', '7', 'ALLMNB', 'Ah_kvm', '2018'], values: ['..'] },
    { key: ['0010', '7', 'ALLMNB', 'Ah_kvm', '2019'], values: ['..'] },
    { key: ['0010', '7', 'ALLMNB', 'Ah_kvm', '2020'], values: ['..'] },
    { key: ['0010', '7', 'ALLMNB', 'Ah_kvm', '2021'], values: ['..'] },
    { key: ['0010', '7', 'ALLMNB', 'Ah_kvm', '2022'], values: ['2112'] },
    { key: ['0010', '7', 'ALLMNB', 'Ah_kvm', '2023'], values: ['2178'] },
    { key: ['0020', '1', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['1213'] },
    { key: ['0020', '1', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['1253'] },
    { key: ['0020', '1', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['1259'] },
    { key: ['0020', '1', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['1321'] },
    { key: ['0020', '1', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['1343'] },
    { key: ['0020', '1', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['1343'] },
    { key: ['0020', '1', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1365'] },
    { key: ['0020', '1', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['1426'] },
    { key: ['0020', '1', 'ALLMNB', 'Ah_kvm', '2016'], values: ['1081'] },
    { key: ['0020', '1', 'ALLMNB', 'Ah_kvm', '2017'], values: ['1096'] },
    { key: ['0020', '1', 'ALLMNB', 'Ah_kvm', '2018'], values: ['1117'] },
    { key: ['0020', '1', 'ALLMNB', 'Ah_kvm', '2019'], values: ['1169'] },
    { key: ['0020', '1', 'ALLMNB', 'Ah_kvm', '2020'], values: ['1190'] },
    { key: ['0020', '1', 'ALLMNB', 'Ah_kvm', '2021'], values: ['1209'] },
    { key: ['0020', '1', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1228'] },
    { key: ['0020', '1', 'ALLMNB', 'Ah_kvm', '2023'], values: ['1282'] },
    { key: ['0020', '2', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['1129'] },
    { key: ['0020', '2', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['1142'] },
    { key: ['0020', '2', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['1180'] },
    { key: ['0020', '2', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['1219'] },
    { key: ['0020', '2', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['1233'] },
    { key: ['0020', '2', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['1257'] },
    { key: ['0020', '2', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1278'] },
    { key: ['0020', '2', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['1360'] },
    { key: ['0020', '2', 'ALLMNB', 'Ah_kvm', '2016'], values: ['1056'] },
    { key: ['0020', '2', 'ALLMNB', 'Ah_kvm', '2017'], values: ['1065'] },
    { key: ['0020', '2', 'ALLMNB', 'Ah_kvm', '2018'], values: ['1080'] },
    { key: ['0020', '2', 'ALLMNB', 'Ah_kvm', '2019'], values: ['1116'] },
    { key: ['0020', '2', 'ALLMNB', 'Ah_kvm', '2020'], values: ['1148'] },
    { key: ['0020', '2', 'ALLMNB', 'Ah_kvm', '2021'], values: ['1175'] },
    { key: ['0020', '2', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1189'] },
    { key: ['0020', '2', 'ALLMNB', 'Ah_kvm', '2023'], values: ['1233'] },
    { key: ['0020', '3', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['1091'] },
    { key: ['0020', '3', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['1113'] },
    { key: ['0020', '3', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['1141'] },
    { key: ['0020', '3', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['1191'] },
    { key: ['0020', '3', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['1205'] },
    { key: ['0020', '3', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['1239'] },
    { key: ['0020', '3', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1256'] },
    { key: ['0020', '3', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['1328'] },
    { key: ['0020', '3', 'ALLMNB', 'Ah_kvm', '2016'], values: ['962'] },
    { key: ['0020', '3', 'ALLMNB', 'Ah_kvm', '2017'], values: ['985'] },
    { key: ['0020', '3', 'ALLMNB', 'Ah_kvm', '2018'], values: ['1000'] },
    { key: ['0020', '3', 'ALLMNB', 'Ah_kvm', '2019'], values: ['1000'] },
    { key: ['0020', '3', 'ALLMNB', 'Ah_kvm', '2020'], values: ['1027'] },
    { key: ['0020', '3', 'ALLMNB', 'Ah_kvm', '2021'], values: ['1059'] },
    { key: ['0020', '3', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1083'] },
    { key: ['0020', '3', 'ALLMNB', 'Ah_kvm', '2023'], values: ['1119'] },
    { key: ['0020', '4', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['1215'] },
    { key: ['0020', '4', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['1220'] },
    { key: ['0020', '4', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['1240'] },
    { key: ['0020', '4', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['1223'] },
    { key: ['0020', '4', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['1241'] },
    { key: ['0020', '4', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['1266'] },
    { key: ['0020', '4', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1293'] },
    { key: ['0020', '4', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['1341'] },
    { key: ['0020', '4', 'ALLMNB', 'Ah_kvm', '2016'], values: ['1118'] },
    { key: ['0020', '4', 'ALLMNB', 'Ah_kvm', '2017'], values: ['1135'] },
    { key: ['0020', '4', 'ALLMNB', 'Ah_kvm', '2018'], values: ['1146'] },
    { key: ['0020', '4', 'ALLMNB', 'Ah_kvm', '2019'], values: ['1188'] },
    { key: ['0020', '4', 'ALLMNB', 'Ah_kvm', '2020'], values: ['1202'] },
    { key: ['0020', '4', 'ALLMNB', 'Ah_kvm', '2021'], values: ['1226'] },
    { key: ['0020', '4', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1260'] },
    { key: ['0020', '4', 'ALLMNB', 'Ah_kvm', '2023'], values: ['1304'] },
    { key: ['0020', '5', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['..'] },
    { key: ['0020', '5', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['..'] },
    { key: ['0020', '5', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['..'] },
    { key: ['0020', '5', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['..'] },
    { key: ['0020', '5', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['..'] },
    { key: ['0020', '5', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['..'] },
    { key: ['0020', '5', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['..'] },
    { key: ['0020', '5', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['..'] },
    { key: ['0020', '5', 'ALLMNB', 'Ah_kvm', '2016'], values: ['1468'] },
    { key: ['0020', '5', 'ALLMNB', 'Ah_kvm', '2017'], values: ['1454'] },
    { key: ['0020', '5', 'ALLMNB', 'Ah_kvm', '2018'], values: ['1472'] },
    { key: ['0020', '5', 'ALLMNB', 'Ah_kvm', '2019'], values: ['1498'] },
    { key: ['0020', '5', 'ALLMNB', 'Ah_kvm', '2020'], values: ['1523'] },
    { key: ['0020', '5', 'ALLMNB', 'Ah_kvm', '2021'], values: ['1579'] },
    { key: ['0020', '5', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1592'] },
    { key: ['0020', '5', 'ALLMNB', 'Ah_kvm', '2023'], values: ['1643'] },
    { key: ['0020', '6', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['1790'] },
    { key: ['0020', '6', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['1845'] },
    { key: ['0020', '6', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['1827'] },
    { key: ['0020', '6', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['1832'] },
    { key: ['0020', '6', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['1797'] },
    { key: ['0020', '6', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['1866'] },
    { key: ['0020', '6', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1829'] },
    { key: ['0020', '6', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['1902'] },
    { key: ['0020', '6', 'ALLMNB', 'Ah_kvm', '2016'], values: ['..'] },
    { key: ['0020', '6', 'ALLMNB', 'Ah_kvm', '2017'], values: ['..'] },
    { key: ['0020', '6', 'ALLMNB', 'Ah_kvm', '2018'], values: ['1586'] },
    { key: ['0020', '6', 'ALLMNB', 'Ah_kvm', '2019'], values: ['1641'] },
    { key: ['0020', '6', 'ALLMNB', 'Ah_kvm', '2020'], values: ['1733'] },
    { key: ['0020', '6', 'ALLMNB', 'Ah_kvm', '2021'], values: ['1750'] },
    { key: ['0020', '6', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1790'] },
    { key: ['0020', '6', 'ALLMNB', 'Ah_kvm', '2023'], values: ['1852'] },
    { key: ['0020', '7', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['..'] },
    { key: ['0020', '7', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['..'] },
    { key: ['0020', '7', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['..'] },
    { key: ['0020', '7', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['..'] },
    { key: ['0020', '7', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['..'] },
    { key: ['0020', '7', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['..'] },
    { key: ['0020', '7', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['..'] },
    { key: ['0020', '7', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['2005'] },
    { key: ['0020', '7', 'ALLMNB', 'Ah_kvm', '2016'], values: ['..'] },
    { key: ['0020', '7', 'ALLMNB', 'Ah_kvm', '2017'], values: ['..'] },
    { key: ['0020', '7', 'ALLMNB', 'Ah_kvm', '2018'], values: ['..'] },
    { key: ['0020', '7', 'ALLMNB', 'Ah_kvm', '2019'], values: ['..'] },
    { key: ['0020', '7', 'ALLMNB', 'Ah_kvm', '2020'], values: ['..'] },
    { key: ['0020', '7', 'ALLMNB', 'Ah_kvm', '2021'], values: ['..'] },
    { key: ['0020', '7', 'ALLMNB', 'Ah_kvm', '2022'], values: ['..'] },
    { key: ['0020', '7', 'ALLMNB', 'Ah_kvm', '2023'], values: ['..'] },
    { key: ['0030', '1', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['1166'] },
    { key: ['0030', '1', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['1210'] },
    { key: ['0030', '1', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['1217'] },
    { key: ['0030', '1', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['1263'] },
    { key: ['0030', '1', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['1307'] },
    { key: ['0030', '1', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['1316'] },
    { key: ['0030', '1', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1339'] },
    { key: ['0030', '1', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['1406'] },
    { key: ['0030', '1', 'ALLMNB', 'Ah_kvm', '2016'], values: ['..'] },
    { key: ['0030', '1', 'ALLMNB', 'Ah_kvm', '2017'], values: ['..'] },
    { key: ['0030', '1', 'ALLMNB', 'Ah_kvm', '2018'], values: ['..'] },
    { key: ['0030', '1', 'ALLMNB', 'Ah_kvm', '2019'], values: ['..'] },
    { key: ['0030', '1', 'ALLMNB', 'Ah_kvm', '2020'], values: ['..'] },
    { key: ['0030', '1', 'ALLMNB', 'Ah_kvm', '2021'], values: ['..'] },
    { key: ['0030', '1', 'ALLMNB', 'Ah_kvm', '2022'], values: ['..'] },
    { key: ['0030', '1', 'ALLMNB', 'Ah_kvm', '2023'], values: ['..'] },
    { key: ['0030', '2', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['1106'] },
    { key: ['0030', '2', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['1131'] },
    { key: ['0030', '2', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['1196'] },
    { key: ['0030', '2', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['1230'] },
    { key: ['0030', '2', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['1315'] },
    { key: ['0030', '2', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['1319'] },
    { key: ['0030', '2', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1361'] },
    { key: ['0030', '2', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['1472'] },
    { key: ['0030', '2', 'ALLMNB', 'Ah_kvm', '2016'], values: ['1139'] },
    { key: ['0030', '2', 'ALLMNB', 'Ah_kvm', '2017'], values: ['1153'] },
    { key: ['0030', '2', 'ALLMNB', 'Ah_kvm', '2018'], values: ['1174'] },
    { key: ['0030', '2', 'ALLMNB', 'Ah_kvm', '2019'], values: ['1185'] },
    { key: ['0030', '2', 'ALLMNB', 'Ah_kvm', '2020'], values: ['1233'] },
    { key: ['0030', '2', 'ALLMNB', 'Ah_kvm', '2021'], values: ['1256'] },
    { key: ['0030', '2', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1349'] },
    { key: ['0030', '2', 'ALLMNB', 'Ah_kvm', '2023'], values: ['1414'] },
    { key: ['0030', '3', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['1100'] },
    { key: ['0030', '3', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['1108'] },
    { key: ['0030', '3', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['1159'] },
    { key: ['0030', '3', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['1175'] },
    { key: ['0030', '3', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['1207'] },
    { key: ['0030', '3', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['1242'] },
    { key: ['0030', '3', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1285'] },
    { key: ['0030', '3', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['1369'] },
    { key: ['0030', '3', 'ALLMNB', 'Ah_kvm', '2016'], values: ['980'] },
    { key: ['0030', '3', 'ALLMNB', 'Ah_kvm', '2017'], values: ['993'] },
    { key: ['0030', '3', 'ALLMNB', 'Ah_kvm', '2018'], values: ['1018'] },
    { key: ['0030', '3', 'ALLMNB', 'Ah_kvm', '2019'], values: ['1034'] },
    { key: ['0030', '3', 'ALLMNB', 'Ah_kvm', '2020'], values: ['1061'] },
    { key: ['0030', '3', 'ALLMNB', 'Ah_kvm', '2021'], values: ['1085'] },
    { key: ['0030', '3', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1140'] },
    { key: ['0030', '3', 'ALLMNB', 'Ah_kvm', '2023'], values: ['1207'] },
    { key: ['0030', '4', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['1240'] },
    { key: ['0030', '4', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['1240'] },
    { key: ['0030', '4', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['1269'] },
    { key: ['0030', '4', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['1226'] },
    { key: ['0030', '4', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['1274'] },
    { key: ['0030', '4', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['1263'] },
    { key: ['0030', '4', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1334'] },
    { key: ['0030', '4', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['1356'] },
    { key: ['0030', '4', 'ALLMNB', 'Ah_kvm', '2016'], values: ['1056'] },
    { key: ['0030', '4', 'ALLMNB', 'Ah_kvm', '2017'], values: ['1060'] },
    { key: ['0030', '4', 'ALLMNB', 'Ah_kvm', '2018'], values: ['1068'] },
    { key: ['0030', '4', 'ALLMNB', 'Ah_kvm', '2019'], values: ['1085'] },
    { key: ['0030', '4', 'ALLMNB', 'Ah_kvm', '2020'], values: ['1112'] },
    { key: ['0030', '4', 'ALLMNB', 'Ah_kvm', '2021'], values: ['1147'] },
    { key: ['0030', '4', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1159'] },
    { key: ['0030', '4', 'ALLMNB', 'Ah_kvm', '2023'], values: ['1220'] },
    { key: ['0030', '5', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['1486'] },
    { key: ['0030', '5', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['1497'] },
    { key: ['0030', '5', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['1487'] },
    { key: ['0030', '5', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['1576'] },
    { key: ['0030', '5', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['1572'] },
    { key: ['0030', '5', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['1567'] },
    { key: ['0030', '5', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1621'] },
    { key: ['0030', '5', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['1704'] },
    { key: ['0030', '5', 'ALLMNB', 'Ah_kvm', '2016'], values: ['1420'] },
    { key: ['0030', '5', 'ALLMNB', 'Ah_kvm', '2017'], values: ['1445'] },
    { key: ['0030', '5', 'ALLMNB', 'Ah_kvm', '2018'], values: ['1444'] },
    { key: ['0030', '5', 'ALLMNB', 'Ah_kvm', '2019'], values: ['1537'] },
    { key: ['0030', '5', 'ALLMNB', 'Ah_kvm', '2020'], values: ['1535'] },
    { key: ['0030', '5', 'ALLMNB', 'Ah_kvm', '2021'], values: ['1547'] },
    { key: ['0030', '5', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1602'] },
    { key: ['0030', '5', 'ALLMNB', 'Ah_kvm', '2023'], values: ['1694'] },
    { key: ['0030', '6', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['1729'] },
    { key: ['0030', '6', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['1815'] },
    { key: ['0030', '6', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['1873'] },
    { key: ['0030', '6', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['1963'] },
    { key: ['0030', '6', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['1879'] },
    { key: ['0030', '6', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['1846'] },
    { key: ['0030', '6', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1857'] },
    { key: ['0030', '6', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['1935'] },
    { key: ['0030', '6', 'ALLMNB', 'Ah_kvm', '2016'], values: ['1498'] },
    { key: ['0030', '6', 'ALLMNB', 'Ah_kvm', '2017'], values: ['1515'] },
    { key: ['0030', '6', 'ALLMNB', 'Ah_kvm', '2018'], values: ['1557'] },
    { key: ['0030', '6', 'ALLMNB', 'Ah_kvm', '2019'], values: ['1591'] },
    { key: ['0030', '6', 'ALLMNB', 'Ah_kvm', '2020'], values: ['1677'] },
    { key: ['0030', '6', 'ALLMNB', 'Ah_kvm', '2021'], values: ['1668'] },
    { key: ['0030', '6', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1699'] },
    { key: ['0030', '6', 'ALLMNB', 'Ah_kvm', '2023'], values: ['1769'] },
    { key: ['0030', '7', 'PrivOovriga', 'Ah_kvm', '2016'], values: ['..'] },
    { key: ['0030', '7', 'PrivOovriga', 'Ah_kvm', '2017'], values: ['..'] },
    { key: ['0030', '7', 'PrivOovriga', 'Ah_kvm', '2018'], values: ['..'] },
    { key: ['0030', '7', 'PrivOovriga', 'Ah_kvm', '2019'], values: ['..'] },
    { key: ['0030', '7', 'PrivOovriga', 'Ah_kvm', '2020'], values: ['..'] },
    { key: ['0030', '7', 'PrivOovriga', 'Ah_kvm', '2021'], values: ['..'] },
    { key: ['0030', '7', 'PrivOovriga', 'Ah_kvm', '2022'], values: ['1849'] },
    { key: ['0030', '7', 'PrivOovriga', 'Ah_kvm', '2023'], values: ['2097'] },
    { key: ['0030', '7', 'ALLMNB', 'Ah_kvm', '2016'], values: ['..'] },
    { key: ['0030', '7', 'ALLMNB', 'Ah_kvm', '2017'], values: ['..'] },
    { key: ['0030', '7', 'ALLMNB', 'Ah_kvm', '2018'], values: ['..'] },
    { key: ['0030', '7', 'ALLMNB', 'Ah_kvm', '2019'], values: ['..'] },
    { key: ['0030', '7', 'ALLMNB', 'Ah_kvm', '2020'], values: ['..'] },
    { key: ['0030', '7', 'ALLMNB', 'Ah_kvm', '2021'], values: ['..'] },
    { key: ['0030', '7', 'ALLMNB', 'Ah_kvm', '2022'], values: ['1789'] },
    { key: ['0030', '7', 'ALLMNB', 'Ah_kvm', '2023'], values: ['..'] },
  ],
  metadata: [
    {
      infofile: 'BO0406',
      updated: '2023-12-16T23:14:00Z',
      label:
        'Medelhyra i hyreslägenhet  efter region, byggår, ägarkategori, hyresuppgift och år',
      source: 'SCB',
    },
  ],
};