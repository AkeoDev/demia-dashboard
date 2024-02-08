import { FunctionComponent } from "react"
import { Layout } from "../../components/Layout/Layout"
import { TableWithoutSorting } from "../../components/Table/Table"
import { Cell } from '@table-library/react-table-library/table';
import classes from './Notifications.module.scss'
import { ReactSVG } from "react-svg";
import { actionsIcon, messageIcon } from "../../assets";

const nodes = [
    {
        isRead: false,
        name: "FT2",
        message: "Manual entry update occured",
        timestamp: "June 14, 09:43 AM",
        id: 1
    },
    {
        isRead: false,
        name: "FT2",
        message: "Manual entry update occured",
        timestamp: "June 14, 09:43 AM",
        id: 2
    },
    {
        isRead: false,
        name: "FT2",
        message: "Manual entry update occured",
        timestamp: "June 14, 09:43 AM",
        id: 3
    },
    {
        isRead: true,
        name: "FT2",
        message: "Manual entry update occured",
        timestamp: "June 14, 09:43 AM",
        id: 4
    },
    {
        isRead: true,
        name: "FT2",
        message: "Manual entry update occured",
        timestamp: "June 14, 09:43 AM",
        id: 5
    },
    {
        isRead: true,
        name: "FT2",
        message: "Manual entry update occured",
        timestamp: "June 14, 09:43 AM",
        id: 6
    },
    {
        isRead: true,
        name: "FT2",
        message: "Manual entry update occured",
        timestamp: "June 14, 09:43 AM",
        id: 7
    },
]

const fields = [
    "Name",
    "Message",
    "Timestamp",
    ""
]

const NotificationsRowTemplate: FunctionComponent<{item: any}> = ({item}) => {
    return (
        <>
            <Cell>
                <div className={classes['name-cell']}>
                    {!item.isRead ? <div className={classes['bullet']}></div> : ""}
                    <span className={classes['text']}>{item.name}</span>
                </div>
            </Cell>
            <Cell>
                <span className={classes['text']}>{item.message}</span>
            </Cell>
            <Cell>
                <span className={classes['text']}>{item.timestamp}</span>
            </Cell>
            <Cell>
                <div className={classes['actions']}>
                    <ReactSVG src={messageIcon}></ReactSVG>
                    <ReactSVG src={actionsIcon}></ReactSVG>
                </div>
            </Cell>
        </>
    )
}

export const Notifications = () => {
    return (
        <Layout>
            <TableWithoutSorting data={{nodes}} fields={fields} RowTemplate={NotificationsRowTemplate}/>
        </Layout>
    )
}