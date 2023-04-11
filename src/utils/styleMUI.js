import reportIcon from '../assets/report_logo.svg'

export const styleEditProfile = {
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const muiStyleLoginBtn = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export const muiBtnOfficeDelete = {
  border: "none",
  bordeRadius: '20px',
  padding: "0.5rem 1rem",
  bgcolor: 'primary',
  color: 'secondary',
};

export const muiOfficeBar = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: '90%',
  m:2
}

export const muiBackLink = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "start",
  width: '100%',
  mt: 2,
  color: 'secondary.dark'
}

export const muiDashboardHome = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  mt: '1rem'
}

export const muiModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export const muiModalChat = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  overflow: "scroll",
  height: "70%",
};

export const muiModalChatForm = {
  borderTop: "1px solid grey",
  position: "sticky",
  bottom: 0,
  backgroundColor: "white",
  p: 2,
};

export const muiChatSenderMsg = {
  backgroundColor: "#BFD732",
  borderRadius: "8px",
  padding: ".5rem",
  wordBreak:'break-word'
};

export const muiChatRecipientMsg = {
  backgroundColor: "#F5F6F7",
  borderRadius: "8px",
  padding: ".5rem",
  wordBreak:'break-word'
};