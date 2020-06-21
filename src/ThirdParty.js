export default async () => {
  setTimeout(() => {
    (function() {
      var a = window.ChatGen || [];
      if (!a.loaded) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://app.chatgen.ai/cmp/chat-widget/bot.js';
        var fs = document.getElementsByTagName('script')[0];
        fs.parentNode.insertBefore(s, fs);
        s.onload = function() {
          var yourKey = 'LAAZjU7C';
          var widgetKey = { widget_key: yourKey };
          window.ChatGen.init(widgetKey);
        };
      }
    })();
  }, 5000);
}
