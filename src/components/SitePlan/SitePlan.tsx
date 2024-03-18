import { ReactSVG } from "react-svg";
import {
  F1Back,
  F1Front,
  M1Back,
  M1Front,
  N1Back,
  N1Front,
  V1,
  V2,
  V3,
  V4,
  Y1Back,
  Y1Front,
  arrowLeft,
  greyArrowLeft,
  greyArrowRight,
  pinIcon,
} from "../../assets";
import classes from "./SitePlan.module.scss";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

interface Pin {
  sensorID: string;
  sensorSlug: string;
  class: string;
  class2: string;
  title: string;
  model?: string;
  flow?: string;
  average?: string;
}

export const SitePlan = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([V1, V2, V3, V4]);
  const [isCloserViewActive, setIsCloserViewActive] = useState(false);
  const [isBackImageActive, setIsBackImageActive] = useState(false);
  const [pins, setPins] = useState<Pin[]>([]);

  const area1handler = () => {
    setImages([M1Front, M1Back]);
    setIsCloserViewActive(true);
    setCurrentImageIndex(0);

    const data: Pin[] = [
      {
        sensorID: "124124124",
        sensorSlug: "cargo-sensor",
        class: "motor-0",
        class2: "motor-180",
        title: "Motor 1",
        model: "Motor 2-cil",
        flow: "185.71 Nm3/h",
        average: "185.23 Nm3/h",
      },
    ];
    setPins(data);
  };
  const area2handler = () => {
    setImages([Y1Front, Y1Back]);
    setIsCloserViewActive(true);
    setCurrentImageIndex(0);

    const data: Pin[] = [
      {
        sensorID: "124124124",
        sensorSlug: "flowmeter-1",
        class: "uad-0",
        class2: "uad-180",
        title: "Motor 1",
        model: "Motor 2-cil",
        flow: "185.71 Nm3/h",
        average: "185.23 Nm3/h",
      },
    ];
    setPins(data);
  };
  const area3handler = () => {
    setImages([N1Front, N1Back]);
    setIsCloserViewActive(true);
    setCurrentImageIndex(0);

    const data: Pin[] = [
      {
        sensorID: "124124124",
        sensorSlug: "flowmeter-1",
        class: "ucg-0",
        class2: "ucg-180",
        title: "Motor 1",
        model: "Motor 2-cil",
        flow: "185.71 Nm3/h",
        average: "185.23 Nm3/h",
      },
      {
        sensorID: "124124124",
        sensorSlug: "cargo-sensor",
        class: "ucg-2-0",
        class2: "ucg-2-180",
        title: "Motor 1",
        model: "Motor 2-cil",
        flow: "185.71 Nm3/h",
        average: "185.23 Nm3/h",
      },
      {
        sensorID: "124124124",
        sensorSlug: "feedstock",
        class: "ucg-3-0",
        class2: "ucg-3-180",
        title: "Motor 1",
        model: "Motor 2-cil",
        flow: "185.71 Nm3/h",
        average: "185.23 Nm3/h",
      },
    ];
    setPins(data);
  };
  const area4handler = () => {
    setImages([F1Front, F1Back]);
    setIsCloserViewActive(true);
    setCurrentImageIndex(0);

    const data: Pin[] = [
      {
        sensorID: "FT1",
        sensorSlug: "feedstock",
        class: "flare-0",
        class2: "flare-180",
        title: "Gasflow FT1",
        model: "Prosonic B300",
        flow: "185.71 Nm3/h",
        average: "185.23 Nm3/h",
      },
      {
        sensorID: "FT2",
        sensorSlug: "cargo-sensor",
        class: "flare-2-0",
        class2: "flare-2-180",
        title: "Gasflow FT2",
        model: "Prosonic B300",
        flow: "385.71 Nm3/h",
        average: "485.23 Nm3/h",
      },
    ];
    setPins(data);
  };

  let imageMap;

  if (currentImageIndex == 0) {
    imageMap = (
      <map name="location-map-0">
        <area
          alt="CHP unit - Genset, 0 degree view"
          title="CHP unit - Genset"
          shape="poly"
          coords="516,365,516,295,536,284,537,172,543,160,543,133,541,111,548,105,559,108,557,125,556,157,563,172,563,242,588,231,590,205,752,123,799,147,798,196,807,199,806,269,566,389"
          onClick={area1handler}
        ></area>
        <area
          alt="UAD - Cooling and drying unit, 0 degree view"
          title="UAD - Cooling and drying unit"
          shape="poly"
          coords="188,558,214,571,282,537,281,490,255,476,230,485,228,471,222,465,222,456,231,449,228,440,164,472,161,522"
          onClick={area2handler}
        ></area>
        <area
          alt="UCG - Gas conditioning unit, 0 degree view"
          title="UCG - Gas conditioning unit"
          shape="poly"
          coords="255,474,254,454,333,414,378,437,379,488,299,529,282,520,282,489"
          onClick={area3handler}
        ></area>
        <area
          alt="Flare, 0 degree view"
          title="Flare"
          shape="poly"
          coords="114,523,110,474,126,464,126,398,146,397,147,414,152,415,152,424,144,425,148,466,158,472,160,524,138,535"
          onClick={area4handler}
        ></area>
      </map>
    );
  } else if (currentImageIndex == 1) {
    imageMap = (
      <map name="location-map-1">
        <area
          alt="CHP unit - Genset, 0 degree view"
          title="CHP unit - Genset"
          shape="poly"
          coords="471,338,470,404,711,526,760,500,760,433,752,430,753,378,694,348,687,349,687,342,591,293,562,306,532,288,532,203,526,191,526,168,529,144,521,139,510,143,514,156,514,190,506,209,507,277,506,316"
          onClick={area1handler}
        ></area>
        <area
          alt="UAD - Cooling and drying unit, 0 degree view"
          title="UAD - Cooling and drying unit"
          shape="poly"
          coords="109,184,107,229,172,264,192,255,191,220,231,200,233,172,174,143,166,145,167,168,161,183,131,170"
          onClick={area2handler}
        ></area>
        <area
          alt="UCG - Gas conditioning unit, 0 degree view"
          title="UCG - Gas conditioning unit"
          shape="poly"
          coords="192,273,191,220,233,200,312,239,295,253,306,262,313,290,272,312"
          onClick={area3handler}
        ></area>
        <area
          alt="Flare, 0 degree view"
          title="Flare"
          shape="poly"
          coords="224,167,224,129,207,120,208,70,200,67,191,68,189,81,182,85,190,105,188,133,177,144"
          onClick={area4handler}
        ></area>
      </map>
    );
  } else if (currentImageIndex == 2) {
    imageMap = (
      <map name="location-map-2">
        <area
          alt="CHP unit - Genset, 0 degree view"
          title="CHP unit - Genset"
          shape="poly"
          coords="195,464,194,410,202,405,201,354,263,320,269,326,270,318,365,269,407,293,437,272,436,190,442,176,444,154,439,131,445,124,453,124,459,130,457,146,457,178,462,188,463,301,484,311,485,368,242,490"
          onClick={area1handler}
        ></area>
        <area
          alt="UAD - Cooling and drying unit, 0 degree view"
          title="UAD - Cooling and drying unit"
          shape="poly"
          coords="716,164,785,127,811,143,812,152,836,142,839,206,782,243,746,226,744,186,718,176"
          onClick={area2handler}
        ></area>
        <area
          alt="UCG - Gas conditioning unit, 0 degree view"
          title="UCG - Gas conditioning unit"
          shape="poly"
          coords="638,269,664,282,746,242,745,187,702,169,638,199,638,214"
          onClick={area3handler}
        ></area>
        <area
          alt="Flare, 0 degree view"
          title="Flare"
          shape="poly"
          coords="843,225,864,236,885,225,885,216,889,212,888,165,872,164,872,97,849,98,850,120,856,119,851,164,841,178"
          onClick={area4handler}
        ></area>
      </map>
    );
  } else if (currentImageIndex == 3) {
    imageMap = (
      <map name="location-map-3">
        <area
          alt="CHP unit - Genset, 0 degree view"
          title="CHP unit - Genset"
          shape="poly"
          coords="239,228,238,175,248,173,245,125,290,100,353,133,361,130,456,182,456,222,466,226,467,153,474,141,476,118,473,95,479,89,490,94,488,117,488,142,494,155,494,251,529,272,531,340,481,365,478,347"
          onClick={area1handler}
        ></area>
        <area
          alt="UAD - Cooling and drying unit, 0 degree view"
          title="UAD - Cooling and drying unit"
          shape="poly"
          coords="824,541,830,541,827,521,839,519,867,531,894,518,895,465,828,438,816,441,811,455,813,495"
          onClick={area2handler}
        ></area>
        <area
          alt="UCG - Gas conditioning unit, 0 degree view"
          title="UCG - Gas conditioning unit"
          shape="poly"
          coords="685,455,685,405,726,383,808,423,790,433,790,455,790,492,774,500"
          onClick={area3handler}
        ></area>
        <area
          alt="Flare, 0 degree view"
          title="Flare"
          shape="poly"
          coords="775,554,800,566,822,555,822,500,810,495,809,453,814,452,814,437,803,431,793,434,791,486,778,498,774,508"
          onClick={area4handler}
        ></area>
      </map>
    );
  }

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    if(isCloserViewActive && currentImageIndex == 0) {
      setIsBackImageActive(true);
    } else {
      setIsBackImageActive(false);
    }
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    if(isCloserViewActive && currentImageIndex == 0) {
      setIsBackImageActive(true);
    } else {
      setIsBackImageActive(false);
    }
  };

  const backButtonClickHandler = () => {
    setIsCloserViewActive(false);
    setImages([V1, V2, V3, V4]);
    setIsVisibleSensorInfo(false);
    setIsBackImageActive(false);
  };

  const [openDivId, setOpenDivId] = useState(null);

  const [isVisibleSensorInfo, setIsVisibleSensorInfo] = useState(false);
  const showSensorInfo = (index: any) => {
    setIsVisibleSensorInfo((prev) => !prev);
    setOpenDivId(openDivId === index ? null : index);
  };

  const { slug } = useParams();
  const url = `/projects/${slug}/data-sources`;

  return (
    <article className={classes.sitePlan}>
      <div className={classes.content}>
        <div className={classes.innerContent}>
          <div className={classes.image3dInner}>
            {!isCloserViewActive ? (
              <>
                <img
                  src={images[currentImageIndex]}
                  alt="location-map"
                  className={classes.image}
                  useMap={`#location-map-${currentImageIndex}`}
                />
                {imageMap}
              </>
            ) : (
              <>
                <img
                  src={images[currentImageIndex]}
                  alt="image"
                  className={classes.image}
                />
                {pins.map((pin, index) => (
                  <div
                    className={`${classes.pinContainer} ${classes[pin.class]} ${isBackImageActive ? classes[pin.class2] : '' }`}
                    key={index}
                  >
                    <ReactSVG
                      src={pinIcon}
                      className={classes.pin}
                      onClick={() => showSensorInfo(index)}
                    />
                    {openDivId === index && (
                      <div 
                        className={`${classes.sensorInfo} ${
                          isVisibleSensorInfo ? classes.visible : ""
                        }`}
                      >
                        <div className={classes.sensorTitleContainer}>
                          <h3>{pin.title}</h3>
                        </div>
                        <div className={classes.infoContainer}>
                          <div className={classes.singleItem}>
                            <h4>Sensor ID</h4>
                            <p>{pin.sensorID}</p>
                          </div>
                          <div className={classes.singleItem}>
                            <h4>Model</h4>
                            <p>{pin.model}</p>
                          </div>
                          <div className={classes.singleItem}>
                            <h4>Current flow</h4>
                            <p>{pin.flow}</p>
                          </div>
                          <div className={classes.singleItem}>
                            <h4>Daily average flow</h4>
                            <p>{pin.average}</p>
                          </div>
                        </div>
                        <Link to={`${url}/${pin.sensorSlug}`} className={classes.sensorLink}>
                          View sensor
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
                <button
                  onClick={backButtonClickHandler}
                  className={classes.backButton}
                >
                  <ReactSVG src={arrowLeft} className={classes.icon} />
                  Back
                </button>
              </>
            )}
            <div className={classes.buttons}>
              <button onClick={goToPreviousImage}>
                <ReactSVG src={greyArrowLeft} className={classes.icon} />
              </button>
              <span></span>
              <button onClick={goToNextImage}>
                <ReactSVG src={greyArrowRight} className={classes.icon} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
