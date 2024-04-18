export default function Modal({ showModal }) {
  if (showModal) {
    return (
      <div id="modalMainContainer">
        <iframe src="https://onedrive.live.com/embed?resid=E3FA6B57604F0BB7%2156969&authkey=!ANuEz_3yf8gHr5g&em=2"></iframe>
      </div>
    );
  } else {
    return null;
  }
}
