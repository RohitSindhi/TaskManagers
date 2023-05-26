import { Checkbox, Modal } from "antd";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineDrag } from "react-icons/ai";
import { Hidecolumns } from "../../pages/dashboardPage/dashboardTable/CandidateColumns";
const ColumnControl = ({ ColumnControlProps }: any) => {
  const {
    allColumns,
    getToggleHideAllColumnsProps,
    setColumnOrder,
    visibleColumns,
  } = ColumnControlProps;
  const [columnControlModal, setColumnControlModal] = useState(false);
  const [columnsFromTable, setColumnsFromTable] = useState([
    visibleColumns.slice(0, 12),
    visibleColumns.slice(12, 24),
    visibleColumns.slice(24, 36),
    visibleColumns.slice(36, 48),
  ]);
  const [columnsToDisplay, setColumnsToDisplay]: any = useState([]);
  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  const move = (
    source: any,
    destination: any,
    droppableSource: any,
    droppableDestination: any
  ) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0, removed);
    const result: any = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    return result;
  };
  const handleColumnChange = (result: any) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;
    if (sInd === dInd) {
      const items = reorder(
        columnsFromTable[sInd],
        source.index,
        destination.index
      );
      const newState = [...columnsFromTable];
      newState[sInd] = items;
      setColumnsFromTable(newState);
    } else {
      const result = move(
        columnsFromTable[sInd],
        columnsFromTable[dInd],
        source,
        destination
      );
      const newState = [...columnsFromTable];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];
      setColumnsFromTable(newState.filter((group) => group.length));
      const arr = newState.filter((group) => group.length);
      let newArr: any = [];
      arr.map((e: any) => {
        newArr.push(...e);
      });
      setColumnsToDisplay(newArr.map((e: any) => e.id));
    }
  };
  const confirmColumn = () => {
    setColumnOrder(columnsToDisplay);
    setColumnControlModal(false);
  };
  const resetColumn = () => {
    let arr: any = [];
    Hidecolumns.map((e: any) => {
      allColumns.map((ele: any) => {
        if (e.accessor === ele.id) {
          console.log(ele.id);
          arr.push(ele);
        }
      });
    });
    setColumnsFromTable([
      arr.slice(0, 12),
      arr.slice(12, 24),
      arr.slice(24, 36),
      arr.slice(36, 48),
    ]);
    setColumnsToDisplay(arr.map((d: any) => d.id));
  };
  return (
    <>
      <button
        onClick={() => setColumnControlModal(true)}
        className="user-manage-btn"
      >
        <CgMenuGridO />
      </button>
      <Modal
        title="Column Hide/Show Change"
        className="export-modal column-control"
        open={columnControlModal}
        onOk={() => setColumnControlModal(false)}
        onCancel={() => setColumnControlModal(false)}
      >
        <div className="select-all">
          <div
            className="check-div"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              padding: "15px 15px 10px 15px",
              fontSize: "15px",
              fontFamily: "Mulish",
              fontWeight: "700",
              backgroundColor: "aliceblue",
            }}
          >
            <div className="check-wrap">
              <label htmlFor="Delivery Charges" className="check-mark">
                <input
                  value={"select-all"}
                  type="checkbox"
                  id={"select-all"}
                  {...getToggleHideAllColumnsProps()}
                  style={{top:"-8px"}}
                />
                <span className="black-checkbox"></span>
              </label>
            </div>
            <label
              style={{ cursor: "pointer", width: "100%" }}
              htmlFor={"select-all"}
            >
              Select All
            </label>
          </div>
        </div>
        <div className="drag-div">
          <DragDropContext onDragEnd={handleColumnChange}>
            {columnsFromTable.map((column: any, index: any) => {
              return (
                <Droppable key={index} droppableId={`${index}`}>
                  {(provided: any, snapshot: any) => (
                    <ul
                      style={{
                        padding: "0px",
                        flexBasis: "25%",
                      }}
                      className="characters"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {column?.map((e: any, index: any) => {
                        return (
                          <Draggable
                            key={e.id}
                            draggableId={e.id}
                            index={index}
                          >
                            {(provided: any) => (
                              <li
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                              >
                                {
                                  <div
                                    style={{
                                      padding: "0.4rem",
                                      margin: "0.5rem",
                                      border: "0px solid #222",
                                      boxShadow:
                                        "rgba(0, 0, 0, 0.35) 0px 2px 5px",
                                      display: "flex",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <div
                                      className="check-div"
                                      style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "100%",
                                      }}
                                    >
                                      <div className="check-wrap">
                                        <label
                                          htmlFor="Delivery Charges"
                                          className="check-mark"
                                        >
                                          <input
                                            {...e.getToggleHiddenProps()}
                                            value={e.Header}
                                            type="checkbox"
                                            id={e.id}
                                          />
                                          <span className="black-checkbox"></span>
                                        </label>
                                      </div>
                                      <label
                                        style={{
                                          cursor: "grab",
                                          width: "100%",
                                        }}
                                        htmlFor={e.id}
                                      >
                                        {typeof e.Header === "function"
                                          ? "Check-box"
                                          : e.Header}
                                      </label>
                                    </div>
                                    {
                                      <span
                                        style={{
                                          justifySelf: "end",
                                          color: "#111",
                                        }}
                                      >
                                        <AiOutlineDrag />
                                      </span>
                                    }
                                  </div>
                                }
                              </li>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
              );
            })}
          </DragDropContext>
        </div>
        <div className="btn-div">
          <button onClick={() => resetColumn()} className="confirm-btn">
            Reset
          </button>
          <button onClick={() => confirmColumn()} className="confirm-btn">
            Confirm
          </button>
        </div>
      </Modal>
    </>
  );
};
export default ColumnControl;