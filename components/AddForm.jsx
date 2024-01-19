const React = require('react');

function AddTeaForm() {
  return (
    <div className="container">
      <form id="add-tea">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
            <input
              name="title"
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Place
            <input
              name="place"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            coordsX
            <input name="coordsX" type="text" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            coordsY
            <input name="coordsY" type="text" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Image
            <input name="img" type="file" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
            <input name="description" type="text" className="form-control" id="exampleInputPassword1" />
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

module.exports = AddTeaForm;
