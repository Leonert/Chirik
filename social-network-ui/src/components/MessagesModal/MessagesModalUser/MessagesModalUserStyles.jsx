import {makeStyles} from "@mui/styles";

export const useMessagesModalUserStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    paddingLeft: 15,
    paddingTop: 8,
    paddingBottom: 8,
    cursor: 'pointer',
    backgroundColor: theme.palette.background.lightDefault,

  },
  link: {
    textDecoration: 'none',
  },
  listAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginRight: 15,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  fullName: {
    color: 'rgb(255,255,255)',
    fontWeight: 800,
    fontSize: 15,
  },
  username: {
    color: theme.palette.text.primary,
    fontWeight: 400,
    fontSize: 15,
  },
}));
