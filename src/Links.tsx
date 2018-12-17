import * as React from "react";
import { Component } from "react";
import { Box, Divider } from "rendition";

class Links extends Component {
  render(): React.ReactNode {
    return (
      <Box>
        Examples:
        <a
          href={
            "?yaml=version%3A 1%0Aproperties%3A%20%0A - a%3A%0A%20%20%20 type%3A string"
          }
        >
          one property
        </a>
        &nbsp;|&nbsp;
        <a
          href={
            "?yaml=title%3A resin-cli demo%0Aversion%3A 1%0Adefinitions%3A%0A%20 bootPartition%3A %26BOOT_PARTITION%0A%20%20%20 partition%3A 1%0Amapping%3A%0A%20 targets%3A%0A%20%20%20 config_json%3A%0A%20%20%20%20%20 type%3A file%0A%20%20%20%20%20 format%3A json%0A%20%20%20%20%20 location%3A%0A%20%20%20%20%20%20%20 << %3A *BOOT_PARTITION%0A%20%20%20%20%20%20%20 path%3A %2Fconfig.json%0A%20%20%20 resin_wifi%3A%0A%20%20%20%20%20 type%3A file%0A%20%20%20%20%20 format%3A ini%0A%20%20%20%20%20 location%3A%0A%20%20%20%20%20%20%20 << %3A *BOOT_PARTITION%0A%20%20%20%20%20%20%20 path%3A %2Fsystem-connections%2Fresin-wifi%0Aproperties%3A%0A%20 - network%3A%0A%20%20%20%20%20 title%3A Network%0A%20%20%20%20%20 properties%3A%0A%20%20%20%20%20%20%20 - ssid%3A%0A%20%20%20%20%20%20%20%20%20%20%20 title%3A Network SSID%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A string%0A%20%20%20%20%20%20%20%20%20%20%20 minLength%3A 1%0A%20%20%20%20%20%20%20%20%20%20%20 maxLength%3A 32%0A%20%20%20%20%20%20%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 target%3A resin_wifi%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 path%3A wifi.ssid%0A%20%20%20%20%20%20%20 - passphrase%3A%0A%20%20%20%20%20%20%20%20%20%20%20 title%3A Network Key%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A password%0A%20%20%20%20%20%20%20%20%20%20%20 minLength%3A 8%0A%20%20%20%20%20%20%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 target%3A resin_wifi%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 path%3A wifi-security.psk%0A%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20 target%3A resin_wifi%0A%20%20%20%20%20%20%20 template%3A%0A%20%20%20%20%20%20%20%20%20 connection%3A%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A wifi%0A%20%20%20%20%20%20%20%20%20 wifi%3A%0A%20%20%20%20%20%20%20%20%20%20%20 hidden%3A true%0A%20%20%20%20%20%20%20%20%20%20%20 mode%3A infrastructure%0A%20%20%20%20%20%20%20%20%20 wifi-security%3A%0A%20%20%20%20%20%20%20%20%20%20%20 auth-alg%3A open%0A%20%20%20%20%20%20%20%20%20%20%20 key-mgmt%3A wpa-psk%0A%20%20%20%20%20%20%20%20%20 ipv4%3A%0A%20%20%20%20%20%20%20%20%20%20%20 method%3A auto%0A%20%20%20%20%20%20%20%20%20 ipv6%3A%0A%20%20%20%20%20%20%20%20%20%20%20 addr-gen-mode%3A stable-privacy%0A%20%20%20%20%20%20%20%20%20%20%20 method%3A auto%0A%20 - advanced%3A%0A%20%20%20%20%20 title%3A Advanced%0A%20%20%20%20%20 properties%3A%0A%20%20%20%20%20%20%20 - hostname%3A%0A%20%20%20%20%20%20%20%20%20%20%20 title%3A Device Hostname%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A string%0A%20%20%20%20%20%20%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 target%3A config_json%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 path%3A hostname%0A%20%20%20%20%20%20%20 - persistentLogging%3A%0A%20%20%20%20%20%20%20%20%20%20%20 title%3A Do you want to enable persistent logging%3F%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A boolean%0A%20%20%20%20%20%20%20%20%20%20%20 default%3A false%0A%20%20%20%20%20%20%20%20%20%20%20 mapping%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 target%3A config_json%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 path%3A persistentLogging"
          }
        >
          simple network configuration
        </a>
        &nbsp;|&nbsp;
        <a
          href={
            "?yaml=---%0Aversion%3A 1%0Atitle%3A ResinOS Technologic TS-4900 Configuration%0Aproperties%3A%0A%20 - board%3A%0A%20%20%20%20%20 title%3A CPU Cores%0A%20%20%20%20%20 warning%3A |-%0A%20%20%20%20%20%20%20 Please make sure to select the correct number of CPU Cores for your device.%0A%20%20%20%20%20%20%20 **Failing to do so will brick your device**.%0A%20%20%20%20%20 properties%3A%0A%20%20%20%20%20%20%20 - cores%3A%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A integer%0A%20%20%20%20%20%20%20%20%20%20%20 default%3A 1%0A%20%20%20%20%20%20%20%20%20%20%20 enum%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 - value%3A 1%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20 title%3A Single%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 - value%3A 4%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20 title%3A Quad%0A%20 - network%3A%0A%20%20%20%20%20 title%3A Network Connection%0A%20%20%20%20%20 properties%3A%0A%20%20%20%20%20%20%20 - networks%3A%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A array%0A%20%20%20%20%20%20%20%20%20%20%20 items%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 title%3A WiFi Network%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 properties%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 - ssid%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20 title%3A Network SSID%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20 type%3A string%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 - psk%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20 title%3A Network password%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20 type%3A password%0A%20%20%20%20%20%20%20%20%20%20%20%20%20 warning%3A |-%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20 In order to have usable WiFi connectivity%2C make sure you have attached%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20 a WiFi antenna to your WiFi module.%0A%20 - advanced%3A%0A%20%20%20%20%20 title%3A Advanced%0A%20%20%20%20%20 collapsed%3A true%0A%20%20%20%20%20 properties%3A%0A%20%20%20%20%20%20%20 - appUpdatePollInterval%3A%0A%20%20%20%20%20%20%20%20%20%20%20 title%3A Application update poll interval%0A%20%20%20%20%20%20%20%20%20%20%20 help%3A Check for updates every X minutes%0A%20%20%20%20%20%20%20%20%20%20%20 type%3A integer%0A%20%20%20%20%20%20%20%20%20%20%20 min%3A 10%0A%20%20%20%20%20%20%20%20%20%20%20 default%3A 10%0A"
          }
        >
          advanced network configuration
        </a>
        <Divider />
        Documentation:
        <a href={"https://github.com/balena-io-modules/balena-cdsl/issues/15"}>
          What is supported
        </a>
        &nbsp;|&nbsp;
        <a
          href={
            "https://github.com/balena-io/balena/blob/9471e79bcdaa75a567e89b7d3ce4a11979d38485/specs/configuration-dsl.md"
          }
        >
          DSL specification
        </a>
        &nbsp;|&nbsp;
        <a
          href={
            "https://github.com/balena-io/balena/blob/614c8f4c3960008f5da7feb63752040287c1f540/specs/configuration-dsl-mapping-extension.md"
          }
        >
          Mapping extensions
        </a>
        &nbsp;|&nbsp;
        <a
          href={
            "https://github.com/balena-io/balena/blob/8e9c7c177e8d730484fbfce5c4281d4c7c205565/specs/json-schema-extensions.md"
          }
        >
          JSON Schema extensions
        </a>
      </Box>
    );
  }
}

export default Links;
