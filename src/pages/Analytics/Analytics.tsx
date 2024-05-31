import { Link, useLocation, useParams } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import classes from "./Analytics.module.scss";
import "./CalendarStyle.scss";
import { ReactSVG } from "react-svg";
import {
  arrowRightIcon,
  exportIconBlack,
  hamburgerIcon,
  settingsIcon,
  sustainability,
} from "../../assets";
import { AnalyticsData } from "../../components/Analytics";
import {
  GreenAreaAnalyticsChart,
  PinkLineChart,
} from "../../components/Graphs/Graphs";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { CSVLink } from "react-csv";

const chartsData = [
  {
    title: "Total Project GHG emissions",
    value: "172,642",
    unit: "t CH4",
    url: "total-ghg-emission",
    data: [
      {
        name: "May 20 2024",
        uv: 0,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 21 2024",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "May 22 2024",
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "May 23 2024",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "May 24 2024",
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "May 25 2024",
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "May 26 2024",
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
      {
        name: "May 27 2024",
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "May 28 2024",
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "May 29 2024",
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ],
  },
  {
    title: "Total methane emissions destroyed",
    value: "172,642",
    unit: "t CH4",
    url: "total-methane-emission",
    data: [
      {
        name: "May 20 2024",
        uv: 20000,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 21 2024",
        uv: 45000,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 22 2024",
        uv: 65000,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 23 2024",
        uv: 98000,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 24 2024",
        uv: 120000,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 25 2024",
        uv: 145000,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 26 2024",
        uv: 160000,
        pv: 0,
        amt: 0,
      },
    ],
  },
  {
    title: "Net methane destroyed by flare",
    value: "134,538",
    unit: "m3 CH4",
    url: "total-methane-destroyed",
    data: [
      {
        name: "May 20 2024",
        uv: 8000,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 21 2024",
        uv: 4500,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 22 2024",
        uv: 6500,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 23 2024",
        uv: 9800,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 24 2024",
        uv: 1000,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 25 2024",
        uv: 14500,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 26 2024",
        uv: 16000,
        pv: 0,
        amt: 0,
      },
    ],
  },
  {
    title: "Net methane destroyed by flare2",
    value: "126,841",
    unit: "m3 CH4",
    url: "net-methane-destroyed",
    data: [
      {
        name: "May 20 2024",
        uv: 4000,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 21 2024",
        uv: 5500,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 22 2024",
        uv: 6500,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 23 2024",
        uv: 2800,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 24 2024",
        uv: 12000,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 25 2024",
        uv: 14500,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 26 2024",
        uv: 19000,
        pv: 0,
        amt: 0,
      },
    ],
  },
  {
    title: "Total methane sent to flare",
    value: "126,841",
    unit: "m3 CH4",
    url: "total-methane-destroyed",
    data: [
      {
        name: "May 20 2024",
        uv: 2000,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 21 2024",
        uv: 4500,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 22 2024",
        uv: 6500,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 23 2024",
        uv: 9800,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 24 2024",
        uv: 12000,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 25 2024",
        uv: 14500,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 26 2024",
        uv: 16000,
        pv: 0,
        amt: 0,
      },
    ],
  },
  {
    title: "Total methane sent to flare2",
    value: "134,538",
    unit: "m3 CH4",
    url: "total-methane-sent",
    data: [
      {
        name: "May 20 2024",
        uv: 2000,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 21 2024",
        uv: 4500,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 22 2024",
        uv: 6500,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 23 2024",
        uv: 9800,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 24 2024",
        uv: 12000,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 25 2024",
        uv: 14500,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 26 2024",
        uv: 16000,
        pv: 0,
        amt: 0,
      },
    ],
  },
  {
    title: "Total GHG emissions from electricity generation and delivery",
    value: "112,5388",
    unit: "t CO2e",
    url: "total-ghg-emission",
    data: [
      {
        name: "May 20 2024",
        uv: 1000,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 21 2024",
        uv: 1500,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 22 2024",
        uv: 6500,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 23 2024",
        uv: 9800,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 24 2024",
        uv: 7000,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 25 2024",
        uv: 14500,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 26 2024",
        uv: 16000,
        pv: 0,
        amt: 0,
      },
    ],
  },
  {
    title: "Total GHG emissions from supplemental fossil fuel",
    value: "96,841",
    unit: "t CO2e",
    url: "total-methane-destroyed",
    data: [
      {
        name: "May 20 2024",
        uv: 2000,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 21 2024",
        uv: 4500,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 22 2024",
        uv: 6500,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 23 2024",
        uv: 9800,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 24 2024",
        uv: 12000,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 25 2024",
        uv: 1400,
        pv: 0,
        amt: 0,
      },
      {
        name: "May 26 2024",
        uv: 16000,
        pv: 0,
        amt: 0,
      },
    ],
  },
];

const statisticsData = [
  {
    icon: sustainability,
    value: "18,463",
    percentage: "+7%",
    text: "GHG emissions last 30 days",
  },
  {
    icon: sustainability,
    value: "18,463",
    percentage: "",
    text: "GHG emissions annu. est.",
  },
  {
    icon: sustainability,
    value: "18,463",
    percentage: "",
    text: "GHG emissions annu. est.",
  },
];

const flattenedData = chartsData.flatMap((item) =>
  item.data.map((subItem) => ({
    title: item.title,
    value: item.value,
    unit: item.unit,
    url: item.url,
    date: subItem.name,
    uv: subItem.uv,
    pv: subItem.pv,
    amt: subItem.amt,
  }))
);

const CSVHeaders = [
  { label: "Title", key: "title" },
  { label: "Value", key: "value" },
  { label: "Unit", key: "unit" },
  { label: "Date", key: "date" },
  { label: "UV", key: "uv" },
  { label: "PV", key: "pv" },
  { label: "Amount", key: "amt" },
];

export const Analytics = () => {
  const { slug } = useParams();
  const url = `/projects/${slug}/analytics-setup/`;

  const [isVisible, setIsVisible] = useState(false);

  const exportButtonHandler = () => {
    setIsVisible((prev) => !prev);
  };

  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const [startDate, setStartDate] = useState(thirtyDaysAgo);
  const [endDate, setEndDate] = useState(new Date());

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  const [CSVData, setCSVData] = useState(flattenedData);

  const dateFormat = (date: any) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let finalDate = new Date(`${year}-${month}-${day}`);

    return finalDate.valueOf();
  };

  const csvButtonHandler = () => {
    let finalCSV: any[] = [];

    let startDateVal = dateFormat(startDate);
    let endDateVal = dateFormat(endDate);

    flattenedData.map((item, index) => {
      let date = new Date(item.date);
      let fullDate = dateFormat(date);

      if (startDateVal <= fullDate && endDateVal >= fullDate) {
        finalCSV[index] = item;
      }
    });

    setCSVData(finalCSV);
  };

  return (
    <Layout>
      <div className={classes.analytics}>
        <div className={classes.titleContainer}>
          <h1 className={classes.title}>Analytics</h1>
          <div className={classes.rightButtons}>
            <Link to={url} className={classes.button}>
              <ReactSVG src={settingsIcon} className={classes.icon}></ReactSVG>
              Settings
            </Link>
            <div className={classes.datePickerContainer}>
              <div className={classes.datepicker}>
                <DatePicker
                  calendarClassName="calendarStyle"
                  popperClassName="pooperStyle"
                  selected={startDate}
                  onChange={(date) => date && setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="MMMM d, yyyy"
                />
                <span>-</span>
                <DatePicker
                  calendarClassName="calendarStyle"
                  popperClassName="pooperStyle"
                  selected={endDate}
                  onChange={(date) => date && setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  dateFormat="MMMM d, yyyy"
                />
              </div>
              <span className={classes.divider}></span>
              <div
                className={classes.moreOptions}
                onClick={exportButtonHandler}
              >
                <ReactSVG
                  src={hamburgerIcon}
                  className={classes.hamburgerIcon}
                ></ReactSVG>
              </div>
            </div>
          </div>
          {isVisible && (
            <div className={classes.export}>
              <div className={classes.exportWrapper}>
                <h4>Export</h4>
                <CSVLink
                  data={CSVData}
                  className={classes.csvDownload}
                  filename={"analytics.csv"}
                  headers={CSVHeaders}
                  onClick={csvButtonHandler}
                >
                  <ReactSVG
                    src={exportIconBlack}
                    className={classes.icon}
                  ></ReactSVG>
                  Export to CSV
                </CSVLink>
              </div>
            </div>
          )}
        </div>
        <div className={classes.content}>
          <div className={classes.innerContent}>
            {/* first main chart here */}
            <div className={classes.analyticsGreenChart}>
              <div className={classes.heading}>
                <div className={classes.projectLink}>
                  <Link to={chartsData[0].title}>{chartsData[0].title}</Link>
                  <ReactSVG src={arrowRightIcon} className={classes.icon} />
                </div>
                <div>
                  <h2>{chartsData[0].value}</h2>
                  <span>{chartsData[0].unit}</span>
                </div>
              </div>
              <PinkLineChart graphData={chartsData[0].data} height={245} />
            </div>
            {/* 3 elements */}
            <div className={classes.statisticWrapper}>
              {statisticsData.map((data: any, index: any) => (
                <AnalyticsData key={index} data={data} />
              ))}
            </div>
            {/* second big chart */}
            <div className={classes.analyticsGreenChart}>
              <div className={classes.heading}>
                <div className={classes.projectLink}>
                  <Link to={chartsData[1].title}>{chartsData[1].title}</Link>
                  <ReactSVG src={arrowRightIcon} className={classes.icon} />
                </div>
                <div>
                  <h2>{chartsData[1].value}</h2>
                  <span>{chartsData[1].unit}</span>
                </div>
              </div>
              <GreenAreaAnalyticsChart
                graphData={chartsData[1].data}
                height={245}
              />
            </div>
            {/* chart grid */}
            <div className={classes.grid}>
              {chartsData.map((item, index) => {
                if (index === 0 || index === 1) {
                  return null;
                }
                return (
                  <div className={classes.analyticsGreenChart} key={index}>
                    <div className={classes.heading}>
                      <div className={classes.projectLink}>
                        <Link to={item.title}>{item.title}</Link>
                        <ReactSVG
                          src={arrowRightIcon}
                          className={classes.icon}
                        />
                      </div>
                      <div>
                        <h2>{item.value}</h2>
                        <span>{item.unit}</span>
                      </div>
                    </div>
                    <GreenAreaAnalyticsChart
                      graphData={item.data}
                      height={197}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
