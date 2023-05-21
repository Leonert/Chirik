import {makeStyles} from "@mui/styles";

export const useMessagesStyles = makeStyles((theme) => ({

  grid: {
    padding: '12px 0px 0px 0px !important',

  },
  headerTitle: {
    backgroundColor: theme.palette.background.lightDefault,

  },
  messagesContainer: {
    '& .MuiPaper-outlined': {
      padding: 0,
      borderRadius: 0,
      minHeight: '100vh',
      borderTop: 0,
      borderBottom: 0,
      backgroundColor: theme.palette.background.lightDefault,
      color: theme.palette.text.primary,


    },
  },
  header: {
    position: 'fixed',
    display: 'flex',
    margin: 0,
    padding: 0,
    width: 329,
    height: 47,
    zIndex: 1,
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderRadius: 0,
    alignItems: 'center',
    backgroundColor: theme.palette.background.lightDefault,
    color: theme.palette.text.primary,

    flex: 1,
    '& h6': {
      marginLeft: 15,
      fontWeight: 800,
    },
    '& svg': {
      marginRight: 20,
    },
  },
  messagesTitle: {
    paddingTop: 83,
    lineHeight: 1.1,
    fontSize: 29,
    fontWeight: 800,
    margin: '0px 30px',
    color: theme.palette.text.secondary,

  },
  messagesText: {
    fontSize: 14,
    color: theme.palette.text.secondary,
    margin: '8px 30px 27px 30px',
    backgroundColor: theme.palette.background.lightDefault,
  },
  messagesButton: {
    marginLeft: 30,
    height: 48,
    padding: theme.spacing(3.2),
    '& .MuiButton-label': {
      fontSize: 15,
    },
  },
  searchWrapper: {
    paddingTop: 60,
  },
  list: {
    '& .Mui-selected': {
      borderRight: '1px solid rgb(27, 149, 224)',
    },
  },
  listItem: {
    padding: 0,
    backgroundColor: theme.palette.background.lightDefault,
    '& :hover': {
      backgroundColor: theme.palette.background.paper,
    },
  },
  userWrapper: {
    height: 76,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    paddingLeft: 15,
    paddingTop: 8,
    paddingBottom: 8,
    cursor: 'pointer',
  },
  userAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginRight: 15,
  },
  userHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userFullName: {
    display: 'inline-block',
    color: theme.palette.text.primary,
    fontWeight: 800,
    fontSize: 15,
  },
  username: {
    marginLeft: 5,
    display: 'inline-block',
    color: theme.palette.text.primary,
    fontWeight: 400,
    fontSize: 15,
  },
  chatContainer: {
    minWidth: 600,
    '& .MuiPaper-outlined': {
      padding: 0,
      borderRadius: 0,
      minHeight: '100vh',
      borderLeft: 0,
      borderTop: 0,
      borderBottom: 0,
      backgroundColor: theme.palette.background.lightDefault,

    },
  },
  chatInfoWrapper: {
    width: 320,
    margin: '0px auto',
    paddingTop: 300,

  },
  chatInfoTitle: {
    lineHeight: 1.1,
    fontSize: 29,
    fontWeight: 800,
    color: theme.palette.text.secondary,


  },
  chatInfoText: {
    fontSize: 14,
    color: 'rgb(83, 100, 113)',
    margin: '8px 0px 27px 0px',

  },
  chatInfoButton: {
    height: 48,
    padding: theme.spacing(3.2),
    '& .MuiButton-label': {
      fontSize: 15,
    },
  },
  chatHeader: {
    position: 'fixed',
    display: 'flex',
    margin: 0,
    padding: 0,
    paddingLeft: 15,
    width: 598,
    height: 53,
    zIndex: 1,
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderBottom: '1px solid #EFF3F4',
    borderRadius: 0,
    alignItems: 'center',
    backgroundColor: theme.palette.background.lightDefault,

    flex: 1,
    '& h6': {
      fontWeight: 800,

    },
  },
  chatAvatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),

    marginRight: 15,
  },
  chat: {
    padding: '53px 15px',
    color: theme.palette.text.primary,
    height: 900,
    overflowY: 'auto',
    backgroundColor: theme.palette.background.lightDefault,

  },
  tweetContainer: {
    marginTop: 10,
    display: 'flex',

    flexDirection: 'row-reverse',
    '& a': {

      color: 'inherit',
      textDecoration: 'none',
    },
  },
  tweetWrapper: {

    border: '1px solid rgb(29, 161, 242)',
    borderRadius: '16px 16px 0px 16px',
    padding: 12,
    width: 384,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  tweetUserInfoWrapper: {
    display: 'flex',
  },
  tweetAvatar: {
    width: '18px !important',
    height: '18px !important',
  },
  tweetUserFullName: {
    marginLeft: 3,
    fontWeight: 700,
    fontSize: 15,
    color: theme.palette.text.secondary,

  },
  tweetUsername: {
    marginLeft: 3,
    color: theme.palette.text.secondary,
    fontSize: 15,
  },
  tweetText:{
    display: 'flex',
    flexDirection: 'row-reverse',
    color: theme.palette.text.primaryChannel,
    backgroundColor: 'rgb(29, 161, 242)',

    padding: '11px 15px',
    marginLeft: 3,
    fontSize: 15,
  },
  myMessage: {
    display: "block",
    flexDirection: "row-reverse",
    "& span": {
      backgroundColor: "rgb(29, 161, 242)",
      color: "#fff",
      padding: "11px 15px",
      maxWidth: 384,
    },
  },
  myMessageCommon: {
    marginTop: 10,
    '& span': {
      borderRadius: '16px 16px 0px 16px',
    },
  },
  myMessageWithTweet: {
    '& span': {
      borderRadius: '0px 0px 0px 16px',
    },
  },
  myMessageDate: {
    fontSize: 12,
    display: 'flex',
    flexDirection: 'row-reverse',
    marginTop: 5,
    color: theme.palette.text.primary,
    '& svg': {
      marginLeft: 5,
      height: '1.2em',
      color: 'rgb(29, 161, 242)',
    },
  },
  participantContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  participantTweetContainer: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'flex-start',
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
  participantTweetWrapper: {
    border: '1px solid rgb(239, 243, 244)',
    borderRadius: '16px 16px 16px 0px',
    padding: 12,
    width: 384,
    '&:hover': {
      cursor: 'pointer',

    },
  },
  participantTweetInfoWrapper: {
    display: 'flex',
  },
  participantTweetAvatar: {
    width: '18px !important',
    height: '18px !important',
  },
  participantTweetFullName: {

    marginLeft: 3,
    fontWeight: 700,
    fontSize: 15,
  },
  participantTweetUsername: {
    marginLeft: 3,
    color: theme.palette.text.primary,
    fontSize: 15,
  },
  participantMessageCommon: {
    backgroundColor: theme.palette.background.default,
    marginTop: 10,
    '& span': {
      borderRadius: '16px 16px 16px 0px',
    },
  },
  participantMessageWithTweet: {

    '& span': {
      borderRadius: '0px 0px 16px 0px',
    },
  },
  participantMessage: {
    display: 'flex',
    alignItems: 'flex-start',

    '& span': {
      backgroundColor: theme.palette.background.lithe,

      padding: '11px 16px',
      maxWidth: 384,
    },
  },
  participantAvatar: {
    marginTop: 'auto',
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginRight: 10,
  },
  participantMessageDate: {
    fontSize: 12,
    marginLeft: 50,
    marginTop: 5,
    color: theme.palette.text.primary,
  },
  chatFooter: {
    display: 'flex',
    position: 'fixed',
    top: 1123,
    width: 598,
    padding: '4px',
    borderRight: 0,
    borderLeft: 0,
    borderBottom: 0,

  },
  chatIcon: {
    '& .MuiIconButton-root': {
      width: 30,
      height: 30,
      '& span': {
        paddingTop: 2,
        '& svg': {
          height: '0.82em',
        },
      },
    },
  },
  emojiIcon: {
    position: 'absolute',
    right: 50,
    '& .MuiIconButton-root': {
      width: 30,
      height: 30,
      '& span': {
        paddingTop: 2,
        '& svg': {
          height: '0.82em',
        },
      },
    },
  },
}));
