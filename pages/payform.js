import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Load 2checkout script
    (function (document, src, libName, config) {
      var script = document.createElement('script');
      script.src = src;
      script.async = true;
      var firstScriptElement = document.getElementsByTagName('script')[0];
      script.onload = function () {
        for (var namespace in config) {
          if (config.hasOwnProperty(namespace)) {
            window[libName].setup.setConfig(namespace, config[namespace]);
          }
        }
        window[libName].register();
      };

      firstScriptElement.parentNode.insertBefore(script, firstScriptElement);
    })(document, 'https://secure.2checkout.com/checkout/client/twoCoInlineCart.js', 'TwoCoInlineCart', {"app":{"merchant":"254173080635","iframeLoad":"checkout"},"cart":{"host":"https:\/\/secure.2checkout.com","customization":"inline"}});
  }, []);

  function handleButtonClick() {
    // Open 2checkout cart
    window.TwoCoInlineCart.cart.checkout();
  }

  return (
    <button onClick={handleButtonClick}>Buy Now</button>
  );
}
