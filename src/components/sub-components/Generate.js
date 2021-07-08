function Generate() {
  return (
    <>
      <div className="row">
        <h1 className="text-white head">Tiny-tiny Urls </h1>
        <div className="col-lg-12">
          <form className="url-form mx-auto p-4">
            <div className="mb-3">
              <label htmlFor="inputURL" className="form-label">
                <i className="fas fa-link"></i>
                <span className="ms-3">Paste your url here</span>
              </label>
              <input type="text" className="form-control" id="inputURL" />
            </div>
            <div className="mb-3 hidden">
              <label htmlFor="outputURL" className="form-label">
                <i className="fas fa-magic"></i>
                <span className="ms-3">Copy your mini url here</span>
              </label>
              <a
                href="https://www.google.com"
                className="form-control"
                id="outputURL"
                target="_blank"
                rel="noreferrer"
              >
                My tini-tiny url
              </a>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Make it tini-tiny
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Generate;
