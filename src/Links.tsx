import * as React from "react";
import { Component } from "react";
import { Box, Divider } from "rendition";
import Permalink from "./Permalink";

const examples = [
  {
    name: 'one property',
    yaml: `version: 1
properties:
 - a:
    type: string
`
  },
  {
    name: 'simple network configuration',
    yaml: `title: resin-cli demo
version: 1
definitions:
  bootPartition: &BOOT_PARTITION
    partition: 1
mapping:
  targets:
    config_json:
      type: file
      format: json
      location:
        << : *BOOT_PARTITION
        path: /config.json
    resin_wifi:
      type: file
      format: ini
      location:
        << : *BOOT_PARTITION
        path: /system-connections/resin-wifi
properties:
  - network:
      title: Network
      properties:
        - ssid:
            title: Network SSID
            type: string
            minLength: 1
            maxLength: 32
            mapping:
              target: resin_wifi
              path: wifi.ssid
        - passphrase:
            title: Network Key
            type: password
            minLength: 8
            mapping:
              target: resin_wifi
              path: wifi-security.psk
      mapping:
        target: resin_wifi
        template:
          connection:
            type: wifi
          wifi:
            hidden: true
            mode: infrastructure
          wifi-security:
            auth-alg: open
            key-mgmt: wpa-psk
          ipv4:
            method: auto
          ipv6:
            addr-gen-mode: stable-privacy
            method: auto
  - advanced:
      title: Advanced
      properties:
        - hostname:
            title: Device Hostname
            type: string
            mapping:
              target: config_json
              path: hostname
        - persistentLogging:
            title: Do you want to enable persistent logging?
            type: boolean
            default: false
            mapping:
              target: config_json
              path: persistentLogging
              `
  },
  {
    name: 'advanced network configuration',
    yaml: `---
version: 1
title: ResinOS Technologic TS-4900 Configuration
properties:
  - board:
      title: CPU Cores
      warning: |-
        Please make sure to select the correct number of CPU Cores for your device.
        **Failing to do so will brick your device**.
      properties:
        - cores:
            type: integer
            default: 1
            enum:
              - value: 1
                title: Single
              - value: 4
                title: Quad
  - network:
      title: Network Connection
      properties:
        - networks:
            type: array
            items:
              title: WiFi Network
              properties:
              - ssid:
                  title: Network SSID
                  type: string
              - psk:
                  title: Network password
                  type: password
              warning: |-
                In order to have usable WiFi connectivity, make sure you have attached
                a WiFi antenna to your WiFi module.
  - advanced:
      title: Advanced
      collapsed: true
      properties:
        - appUpdatePollInterval:
            title: Application update poll interval
            help: Check for updates every X minutes
            type: integer
            min: 10
            default: 10
`
  },
  {
    name: 'formula',
    yaml: `---
version: 1
title: Formula
properties:
- host:
    type: string
    default: www
- domain:
    type: hostname
    default: example.com
- fqdn:
    type: hostname
    formula: host ~ \`.\` ~ domain
`
  }
];

class Links extends Component {
  render(): React.ReactNode {
    return (
      <Box>
        Examples:
        {examples.map((example, index) => {
          return (
            <Permalink
              mx={2}
              text={example.yaml}
              key={index}
            >
              {example.name}
            </Permalink>
          );
        })}
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
