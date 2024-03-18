import { Layout } from "../../components/Layout/Layout";
import classes from "./Documentation.module.scss";
import { fileIconBig, plusIcon } from "../../assets";
import { useState } from "react";
import { Button } from "../../components/Buttons/Button";
import { TableWithoutSorting } from "../../components/Table/Table";
import { Cell } from "@table-library/react-table-library/table";
import { ReactSVG } from "react-svg";
import { DocumentationModal } from "../../components/Modals";

const tableList = [{}];

const fields = ["Name", "Type", "Uploaded On", "Size"];

const DocumentationRowTemplate: React.FC<{ item: any }> = () => {
  return (
    <>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell className={classes.noData}>
        <ReactSVG src={fileIconBig}></ReactSVG>
        <p>NO DATA</p>
      </Cell>
    </>
  );
};

const reportsCertificationFields = [
  "Name",
  "Entity",
  "Type",
  "Uploaded On",
  "Size",
];

const reportsCertificationRowTemplate: React.FC<{ item: any }> = () => {
  return (
    <>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell></Cell>
      <Cell className={classes.noData}>
        <ReactSVG src={fileIconBig}></ReactSVG>
        <p>NO DATA</p>
      </Cell>
    </>
  );
};

export const Documentation = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Layout>
        <div className={classes.documentation}>
          <div className={classes.titleContainer}>
            <h1 className={classes.title}>Documentation</h1>
            <Button
              icon={plusIcon}
              className={classes.button}
              onClick={openModal}
            >
              Add New
            </Button>
          </div>
          <div className={classes.tabs}>
            <div
              className={
                activeTab === 1
                  ? `${classes.tab} ${classes.active}`
                  : `${classes.tab}`
              }
              onClick={() => handleTabClick(1)}
            >
              Project Documents
            </div>
            <div
              className={
                activeTab === 2
                  ? `${classes.tab} ${classes.active}`
                  : `${classes.tab}`
              }
              onClick={() => handleTabClick(2)}
            >
              Monitoring Plans
            </div>
            <div
              className={
                activeTab === 3
                  ? `${classes.tab} ${classes.active}`
                  : `${classes.tab}`
              }
              onClick={() => handleTabClick(3)}
            >
              Reports
            </div>
            <div
              className={
                activeTab === 4
                  ? `${classes.tab} ${classes.active}`
                  : `${classes.tab}`
              }
              onClick={() => handleTabClick(4)}
            >
              Certification
            </div>
          </div>
          {activeTab === 1 && (
            <div className={classes.documentationTable}>
              <TableWithoutSorting
                className={classes.table}
                data={{ nodes: tableList }}
                fields={fields}
                RowTemplate={DocumentationRowTemplate}
              />
            </div>
          )}
          {activeTab === 2 && (
            <div className={classes.documentationTable}>
              <TableWithoutSorting
                className={classes.table}
                data={{ nodes: tableList }}
                fields={fields}
                RowTemplate={DocumentationRowTemplate}
              />
            </div>
          )}
          {activeTab === 3 && (
            <div className={classes.documentationTable}>
              <TableWithoutSorting
                className={classes.table}
                data={{ nodes: tableList }}
                fields={reportsCertificationFields}
                RowTemplate={reportsCertificationRowTemplate}
              />
            </div>
          )}
          {activeTab === 4 && (
            <div className={classes.documentationTable}>
              <TableWithoutSorting
                className={classes.table}
                data={{ nodes: tableList }}
                fields={reportsCertificationFields}
                RowTemplate={reportsCertificationRowTemplate}
              />
            </div>
          )}
        </div>
      </Layout>
      {isModalOpen && <DocumentationModal onClose={closeModal} />}
    </>
  );
};
