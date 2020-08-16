import React from 'react'

function dragDrop() {
    return (
        <div class="container">
        <div class="card">
      <div class="panel panel-default">
        <div class="panel-heading card-header"><strong>Upload Files</strong></div>
        <br/>
        <div class="panel-body card-body">

          <h4>Select files from your computer</h4>
          <form action="" method="post" enctype="multipart/form-data" id="js-upload-form">
            <div class="form-inline">
              <div class="form-group">
                <input type="file" name="files[]" id="js-upload-files" multiple/>
              </div>
              <button type="submit" class="btn btn-sm btn-info" id="js-upload-submit">Upload files</button>
            </div>
          </form>

         <hr/>
          <h4>Or drag and drop files below</h4>
          <div class="upload-drop-zone" id="drop-zone">
            Just drag and drop files here
          </div>

          
        </div>
        </div>
      </div>
    </div>
    );
}

export default dragDrop