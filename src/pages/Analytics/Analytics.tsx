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
import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { CSVLink } from "react-csv";

const chartsData = [
  {
    title: "Total Project GHG emissions",
    value: "172,642",
    unit: "t CH4",
    url: "total-ghg-emission",
    baseline: 7000,
    data: [],
  },
  {
    title: "Total methane emissions destroyed",
    value: "172,642",
    unit: "t CH4",
    url: "total-methane-emission",
    data: [],
  },
  {
    title: "Net methane destroyed by flare",
    value: "134,538",
    unit: "m3 CH4",
    url: "total-methane-destroyed",
    data: [],
  },
  {
    title: "Net methane destroyed by flare2",
    value: "126,841",
    unit: "m3 CH4",
    url: "net-methane-destroyed",
    data: [],
  },
  {
    title: "Total methane sent to flare",
    value: "126,841",
    unit: "m3 CH4",
    url: "total-methane-destroyed",
    data: [],
  },
  {
    title: "Total methane sent to flare2",
    value: "134,538",
    unit: "m3 CH4",
    url: "total-methane-sent",
    data: [],
  },
  {
    title: "Total GHG emissions from electricity generation and delivery",
    value: "112,5388",
    unit: "t CO2e",
    url: "total-ghg-emission",
    data: [],
  },
  {
    title: "Total GHG emissions from supplemental fossil fuel",
    value: "96,841",
    unit: "t CO2e",
    url: "total-methane-destroyed",
    data: [],
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

const CSVHeaders = [
  { label: "Title", key: "title" },
  { label: "Value", key: "value" },
  { label: "Unit", key: "unit" },
  { label: "Date", key: "date" },
  { label: "UV", key: "uv" },
  { label: "PV", key: "pv" },
  { label: "Amount", key: "amt" },
];

interface ICSV {
  title: string;
  value: string;
  unit: string;
  url: string;
  date: number;
  uv: number;
  pv: number;
  amt: number;
}

interface IData {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

interface IGraphData {
  title: string;
  value: string;
  unit: string;
  url: string;
  baseline?: number;
  data: IData[]
}

export const Analytics = () => {
  const { slug } = useParams();
  const url = `/projects/${slug}/analytics-setup/`;

  const [isVisible, setIsVisible] = useState(false);

  const exportButtonHandler = () => {
    setIsVisible((prev) => !prev);
  };

  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: any) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const [startDate, setStartDate] = useState(sevenDaysAgo);
  const [endDate, setEndDate] = useState(new Date());

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);

  const [CSVData, setCSVData] = useState<ICSV[]>([]);

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const dateFormat = (date: Date) => {
    return dateFormatter.format(date);
  };

  const csvButtonHandler = () => {
    setCSVData(generateCSV());
  };

  const [graphData, setGraphData] = useState<IGraphData[]>(chartsData);
  useEffect(() => {
    setGraphData(generateData(startDate, endDate));
  }, []);

  const startDateHandler = (date: Date) => {
    date && setStartDate(date);
    setGraphData(generateData(date, endDate));
  };
  
  const endDateHandler = (date: Date) => {
    date && setEndDate(date);
    setGraphData(generateData(startDate, date));
  };

  const generateCSV = () => {
    return graphData.flatMap((item) =>
      item.data.map((subItem: ICSV|any) => ({
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
  }

  const generateData = (start: Date, end: Date) => {
    const lerp = (a: number, b: number, t: number ) => {
      return Math.floor(a * ( 1 - t ) + b * t);
    };

    const finalData: IGraphData[] =[];

    chartsData.map((item: any, index) => {
      finalData[index] = {
        title: item.title,
        value: item.value,
        unit: item.unit,
        url: item.url,
        baseline: item.baseline,
        data: [],
      };

      const array: IData[] = [];
      for (let d = new Date(start), i = 0; d <= end; d.setDate(d.getDate() + 1), i++) {
        const name = dateFormat(d);
        array.push({
          name,
          uv: lerp(i > 0 ? array[i - 1].uv : Math.random() * 20000, Math.random() * 20000, 0.5),
          pv: lerp(i > 0 ? array[i - 1].pv : Math.random() * 20000, Math.random() * 20000, 0.5),
          amt: lerp(i > 0 ? array[i - 1].amt : Math.random() * 20000, Math.random() * 20000, 0.5),
        });
      }

      finalData[index].data = array;
    });

    return finalData;
  }

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
                  onChange={startDateHandler}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  minDate={null}
                  dateFormat="MMM d, yyyy"
                />
                <span>-</span>
                <DatePicker
                  calendarClassName="calendarStyle"
                  popperClassName="pooperStyle"
                  selected={endDate}
                  onChange={endDateHandler}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  maxDate={null}
                  dateFormat="MMM d, yyyy"
                />
              </div>
              <span className={classes.divider}></span>
              <button
                className={classes.moreOptions}
                onClick={exportButtonHandler}
                ref={buttonRef}
              >
                <ReactSVG
                  src={hamburgerIcon}
                  className={classes.hamburgerIcon}
                ></ReactSVG>
              </button>
            </div>
          </div>
          {isVisible && (
            <div className={classes.export} ref={popupRef}>
              <div className={classes.exportWrapper}>
                <h4>Export</h4>
                <CSVLink
                  data={CSVData}
                  className={classes.csvDownload}
                  filename={"Analytics.csv"}
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
                  <Link to={graphData[0].title}>{graphData[0].title}</Link>
                  <ReactSVG src={arrowRightIcon} className={classes.icon} />
                </div>
                <div>
                  <h2>{graphData[0].value}</h2>
                  <span>{graphData[0].unit}</span>
                </div>
              </div>
              <PinkLineChart
                graphData={graphData[0].data}
                height={265}
                baseline={graphData[0].baseline}
              />
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
                  <Link to={graphData[1].title}>{graphData[1].title}</Link>
                  <ReactSVG src={arrowRightIcon} className={classes.icon} />
                </div>
                <div>
                  <h2>{graphData[1].value}</h2>
                  <span>{graphData[1].unit}</span>
                </div>
              </div>
              <GreenAreaAnalyticsChart
                graphData={graphData[1].data}
                height={265}
              />
            </div>
            {/* chart grid */}
            <div className={classes.grid}>
              {graphData.map((item: any, index: any) => {
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
