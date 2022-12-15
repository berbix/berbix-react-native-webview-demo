import * as React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  const html = `
  <style>
.container {
  height: 600px;
  position: relative;
}

.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>

<div class="container">
  <div class="center">
    <button id="myButton">Verify Me</button>
  </div>
</div>
    

<script src="https://sdk.berbix.com/latest/berbix-verify.js"></script>

<script>
  var handler = BerbixVerify.configure({
    onComplete: function() {
      console.log("done");
    },
    onExit: function() {
      console.log("hello");
    }
  });
  console.log("loaded");

  document.getElementById('myButton').addEventListener('click', function(e) {
    console.log("starting");
    handler.open({
      clientToken: 'your-client-token',
      modal: 'true'
    });
  });
</script>
    `;
  return (
    <WebView
      source={{ html }}
      originWhitelist={['*']}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      onError={(error) => console.log(`WebView=>renderError: ${error}`)}
      onHttpError={(error) => console.log(`WebView=>onHttpError: ${error}`)}
      onRenderProcessGone={(error) =>
        console.log(`WebView=>onRenderProcessGone: ${error}`)
      }
      renderLoading={(e) => console.log(e)}
      startInLoadingState={true}
    />
  );
}