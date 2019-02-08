import React, { Component } from "react";
import { SortablePane, Pane } from "react-sortable-pane";

export default class Dragabble extends Component {
  handleningResize = (e, key, dir, ref, d) => {
    console.log('e ==>>', e);
    console.log('key ==>>', key);
    console.log('dir ==>>', dir);
    console.log('ref ==>>', ref);
    console.log('d ==>>', d);
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
          background: "#ff513b1a",
          flex: 1,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            padding: 10,
            width: 100,
            minHeight: 640,
            border: "1px solid #607d8b96",
            marginRight: 16
          }}
        >
          <SortablePane
            direction="vertical"
            margin={20}
            defaultOrder={["0", "1", "2"]}
            onDragStop={() => console.log("Parei de mover o card 0")}
            onResize={this.handleningResize}
          >
            {[0, 1, 2].map(key => (
              <Pane
                resizable={{ x: false, y: true, xy: false }}
                key={key}
                style={{ background: "#620aff42" }}
                defaultSize={{ width: "100%", height: 120 }}
                minHeight={120}
              >
                {key}Cliente
              </Pane>
            ))}
          </SortablePane>
        </div>
        <div
          style={{
            padding: 10,
            width: 100,
            minHeight: 640,
            border: "1px solid #607d8b96",
            marginRight: 16
          }}
        >
          <SortablePane
            direction="vertical"
            margin={20}
            defaultOrder={["0", "1", "2"]}
            onDragStop={() => console.log("Parei de mover o card 1")}
            onResize={this.handleningResize}
          >
            {[0, 1, 2].map(key => (
              <Pane
                resizable={{ x: false, y: true, xy: false }}
                key={key}
                style={{ background: "#620aff42" }}
                defaultSize={{ width: "100%", height: 120 }}
                minHeight={120}
              >
                {key}Cliente
              </Pane>
            ))}
          </SortablePane>
        </div>
        <div
          style={{
            padding: 10,
            width: 100,
            minHeight: 640,
            border: "1px solid #607d8b96",
            marginRight: 16
          }}
        >
          <SortablePane
            direction="vertical"
            margin={20}
            defaultOrder={["0", "1", "2"]}
            onDragStop={() => console.log("Parei de mover o card 2")}
            onResize={this.handleningResize}
          >
            {[0, 1, 2].map(key => (
              <Pane
                resizable={{ x: false, y: true, xy: false }}
                key={key}
                style={{ background: "#620aff42" }}
                defaultSize={{ width: "100%", height: 120 }}
                minHeight={120}
              >
                {key}Cliente
              </Pane>
            ))}
          </SortablePane>
        </div>
      </div>
    );
  }
}
