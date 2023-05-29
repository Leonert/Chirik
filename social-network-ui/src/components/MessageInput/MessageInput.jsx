import {withStyles} from "@mui/styles";
import TextField from "@material-ui/core/TextField/TextField";

export const MessageInput = withStyles((theme) => ({
    root: {
        '& .MuiOutlinedInput-root': {
            marginTop: 2,
            borderRadius: 20,
            padding: "3px 14px",
            border: "1px solid rgb(207, 217, 222)",
            width: 490,
            color: theme.palette.text.primary,

            '&.Mui-focused': {
                '& fieldset': { borderWidth: 1, borderColor: theme.palette.primary.main },
                '& svg path': {
                    fill: theme.palette.primary.main,
                },
            },
            '&:hover': {
                '& fieldset': { borderColor: 'transparent' },
            },
            '& fieldset': {
                borderColor: 'transparent',
                borderWidth: 1,
            },
        },
        '& .MuiOutlinedInput-input': {
            "&::placeholder": {
                color: theme.palette.text.primary,
            },
        },
    },
}))(TextField);