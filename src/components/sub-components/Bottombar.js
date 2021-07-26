function Bottombar() {
  return (
    <>
      <div className="footer">
        <div className="container py-2 d-flex justify-content-around">
          <div className="logo">
            <i className="fas fa-link me-3"></i>
            <span>Mini Urls</span>
          </div>
          <div className="develop">
            <a
              className="link text-light"
              target="_blank"
              href="https://github.com/sharmaeklavya"
              rel="noreferrer"
            >
              Developed by Eklavya Sharma
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bottombar;
