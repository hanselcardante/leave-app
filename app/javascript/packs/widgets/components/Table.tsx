import * as React from 'react';
import Leave from '../../models/leave';
import LeavePermission from '../../models/leave_permission';

interface TableProps {
  title: string;
  headers: string[];
  data?: any;
  Row: any;
  resource?: string;
  getDetails?: (details: Leave|LeavePermission, resource: string) => void;
}

const Table = (props: TableProps) => {
  const {title, headers, data, Row, getDetails, resource} = props;
  return(
    <div className="row">
      <div className="col-sm">
        <div className="card border-0 shadow-sm">
          <div className="card-header border-0 bg-transparent">
            <h3>{title}<span className="badge badge-pill badge-danger">{data && data.length}</span></h3>
            <hr className="divider"/>
          </div>
          <div className="card-body requests-table">
            <div className="row requests-table-header">
              {headers && headers.map((header, i) => {
                return (
                  <div className="col-sm text-dark" key={i}>{header}</div>
                )
              })
              }
            </div>
            {data && data.map(details => {
              return (
                <Row key={details.id} details={details} handleClick={getDetails(details, resource)}/>
              );
            })
            }
            {data && data.length === 0 &&
            <div className="row">
              No Requests To Show
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;