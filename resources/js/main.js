window.myApp = {
  onWindowClose: () => {
    Neutralino.app.exit();
  }
};

function chooseImageFile() {
  Neutralino.os.showDialogOpen({
    title: 'Select a folder',
    isDirectoryMode: false,
    filter: ['png', 'jpg', 'jpeg']
  }).then(res => {
    imageFileUri = res.selectedEntry;
    console.log(imageFileUri);
  });
}

Neutralino.init();
Neutralino.events.on("windowClose", myApp.onWindowClose);

let imageFileUri = null;
