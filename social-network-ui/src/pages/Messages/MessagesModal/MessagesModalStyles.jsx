import {makeStyles} from "@mui/styles";

export const useMessagesModalStyles = makeStyles((theme) => ({
    header: {
        margin: 0,
        border: 0,
        "& svg": {
            fontSize: 26,
        },
    },
    headerMessage: {
        marginLeft: 15,
    },
    button: {
        marginLeft: "auto",
        height: 30,
    },
    content: {
        height: 550,
        width: 598,
        padding: 0,
    },
    divider: {
        height: 1,
        backgroundColor: "rgb(207, 217, 222)",
    },
}));
