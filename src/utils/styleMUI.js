import reportIcon from '../assets/report_logo.svg'

export const styleEditProfile = {
  display: "flex",
  gap:3,
  flexDirection: "column",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "white",
  border: "1px solid #000",
  boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  p: 4,
  maxWidth:300,
  
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