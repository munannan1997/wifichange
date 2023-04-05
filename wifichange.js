[Script]
if (Network["SSID"].includes("ChinaNet-5G-3C10")) {
  $network.select('DIRECT');
} else {
  $done();
}
