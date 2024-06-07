import { Link, useLocation, useParams } from "react-router-dom";
import { Layout } from "../../components/Layout/Layout";
import classes from "./AnalyticsDetails.module.scss";
import { ReactSVG } from "react-svg";
import {
  arrowLeft,
  exportIconBlack,
  formula,
  hamburgerIcon,
  settingsIcon,
} from "../../assets";
import {
  GreenAreaAnalyticsChart,
  PinkLineChart,
} from "../../components/Graphs/Graphs";
import { useEffect, useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { CSVLink } from "react-csv";

const chartData = {
  title: "Total Project GHG emissions",
  value: "172,642",
  unit: "t CH4",
  url: "total-ghg-emission",
  baseline: 6000,
  data: [],
};

const parametersData = [
  {
    title: "E SSR P8",
    text: "Total SSR P8 GHG emissions from fossil fuel combustion, other than natural gas, for the project reporting period",
    input: false,
    value: "20",
  },
  {
    title: "E SSR P8",
    text: "Total SSR P8 GHG emissions from fossil fuel combustion, other than natural gas, for the project reporting period",
    input: true,
    value: "20",
  },
  {
    title: "E SSR P8",
    text: "Total SSR P8 GHG emissions from fossil fuel combustion, other than natural gas, for the project reporting period",
    input: true,
    value: "20",
  },
  {
    title: "E SSR P8",
    text: "Total SSR P8 GHG emissions from fossil fuel combustion",
    input: true,
    value: "20",
  },
  {
    title: "E SSR P8",
    text: "Total SSR P8 GHG emissions from fossil fuel combustion, other than natural gas, for the project reporting period",
    input: true,
    value: "",
  },
];

const CSVHeaders = [
  { label: "Date", key: "date" },
  { label: "Value", key: "pv" },
];

export const AnalyticsDetails = () => {
  const { analyticsSlug, slug } = useParams();
  const url = `/projects/${slug}/analytics`;
  const parametersUrl = `/projects/${slug}/analytics-setup/${analyticsSlug}`;

  const [isVisible, setIsVisible] = useState(false);
  const exportButtonHandler = () => {
    setIsVisible((prev) => !prev);
  };

  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: any) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node) &&
    buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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

  const [CSVData, setCSVData] = useState([]);

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

  const [graphData, setGraphData] = useState(chartData);
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
    return graphData.data.map((subItem) => ({
      title: chartData.title,
      value: chartData.value,
      unit: chartData.unit,
      url: chartData.url,
      date: subItem.name,
      uv: subItem.uv,
      pv: subItem.pv,
      amt: subItem.amt,
    }));
  }

  const generateData = (start: Date, end: Date) => {
    const lerp = (a, b, t ) => {
      return Math.floor(a * ( 1 - t ) + b * t);
    };

    const finalData = {
      title: chartData.title,
      value: chartData.value,
      unit: chartData.unit,
      url: chartData.url,
      baseline: chartData.baseline,
      data: [],
    };

    for (let d = new Date(start), i = 0; d <= end; d.setDate(d.getDate() + 1), i++) {
      const name = dateFormat(d);
      finalData.data.push({
        name,
        uv: lerp(i > 0 ? finalData.data[i - 1].uv : Math.random() * 20000, Math.random() * 20000, 0.5),
        pv: lerp(i > 0 ? finalData.data[i - 1].pv : Math.random() * 20000, Math.random() * 20000, 0.5),
        amt: lerp(i > 0 ? finalData.data[i - 1].amt : Math.random() * 20000, Math.random() * 20000, 0.5),
      });
    }

    return finalData;
  }

  return (
    <Layout>
      <div className={classes.titleContainer}>
        <Link to={url} className={classes.backLink}>
          <ReactSVG src={arrowLeft} className={classes.arrowIcon}></ReactSVG>
          {analyticsSlug}
        </Link>
        <div className={classes.rightButtons}>
          <Link to={parametersUrl} className={classes.button}>
            <ReactSVG src={settingsIcon} className={classes.icon}></ReactSVG>
            Settings
          </Link>
          <div className={classes.datePickerContainer}>
            <div className={classes.datepicker}>
              <ReactDatePicker
                calendarClassName="calendarStyle"
                popperClassName="pooperStyle"
                selected={startDate}
                onChange={startDateHandler}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat="MMM d, yyyy"
              />
              <span>-</span>
              <ReactDatePicker
                calendarClassName="calendarStyle"
                popperClassName="pooperStyle"
                selected={endDate}
                onChange={endDateHandler}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat="MMM d, yyyy"
              />
            </div>
            <span className={classes.divider}></span>
            <button className={classes.moreOptions} onClick={exportButtonHandler} ref={buttonRef}>
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
                filename={analyticsSlug + ".csv"}
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
          <div className={classes.analyticsGreenChart}>
            <div className={classes.heading}>
              <h3>{graphData.title}</h3>
              <div>
                <h2>{graphData.value}</h2>
                <span>{graphData.unit}</span>
              </div>
            </div>
            {analyticsSlug === "Total Project GHG emissions" ? (
              <PinkLineChart
                graphData={graphData.data}
                height={245}
                baseline={graphData.baseline}
              />
            ) : (
              <GreenAreaAnalyticsChart
                graphData={graphData.data}
                height={245}
              />
            )}
          </div>
          <figure className={classes.imageContainer}>
            <img src={formula} alt="Formula" />
          </figure>
          <div className={classes.data}>
            {parametersData.map((item, index) => (
              <div className={classes.singleItemInput} key={index}>
                <div className={classes.left}>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
                {item.input ? (
                  <div className={classes.right}>
                    <span>Value</span>
                    <input
                      type="text"
                      name="value"
                      value={item.value}
                      disabled
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
