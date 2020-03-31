import React, { Component } from 'react';
import user from '../images/user.jpg';
import Chart from './charts/Chart';
import Patient from './charts/Patient';
import Revenue from './charts/Revenue';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faEllipsisV,
  faCaretUp,
  faCaretDown,
  faFolder,
  faChartLine,
  faCommentAlt,
  faSlidersH
} from '@fortawesome/free-solid-svg-icons';

import { Container, Row } from 'react-bootstrap-grid-component';

class Metrics extends Component {
  render() {
    // Styles
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-1 mt-1 sidebar-menu'>
            <div className='row'>
              <div className='col-md-12'></div>
              <div className='col-md-12'></div>
              <div className='col-md-12'>
                <div className='sidebar-items'>
                  <div className='menu-item'>
                    <FontAwesomeIcon icon={faFolder} />
                  </div>
                  <a className='menu-item' href='#'>
                    <FontAwesomeIcon
                      icon={faChartLine}
                      style={{ color: 'blueviolet' }}
                    />
                  </a>
                  <div className='menu-item'>
                    <FontAwesomeIcon icon={faCommentAlt} />
                  </div>
                  <div className='menu-item'>
                    <FontAwesomeIcon icon={faSlidersH} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-11'>
            <div className='row  notification-bar'>
              <div className='col-md-7'>
                <button className='btn btn-light'>
                  Add Assignment <FontAwesomeIcon icon={faPlus} />{' '}
                </button>
              </div>
              <div className='col-md-2' style={{ display: 'table-cell' }}>
                <div className='progress'>
                  <div
                    className='efficiency-bar'
                    role='progressbar'
                    aria-valuenow='58'
                    aria-valuemin='0'
                    aria-valuemax='100'
                    style={{ width: '55%' }}
                  ></div>
                </div>
                <div>
                  <p className='text-muted'>24k/24k patients seen</p>
                </div>
              </div>
              <div className='col-md-3 pull-right'>
                <div>
                  <img
                    src={user}
                    className='img-user img-circle img-rounded'
                  ></img>
                  Kepha Marasi <br />{' '}
                  <p className='text-muted'>kephamarasi@gmail.com </p>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12' style={{ backgroundColor: '#f4f6f7' }}>
                <div className='wrapper'>
                  <Container>
                    <h2>Analytics</h2>
                    <Row>
                      <div className='col-md-3'>
                        <div className='row'>
                          <div
                            className='card col-md-11 mt-3 visited'
                            style={{ textAlign: 'justify', height: 'auto' }}
                          >
                            <div className='card-body visits'>
                              <p className='text-muted'>VISITS</p>
                              <a
                                id='visit'
                                className='btn mt-1 visit-item'
                                style={{
                                  backgroundColor: '#ffff',
                                  borderColor: '#898989'
                                }}
                                href='#'
                              >
                                <span
                                  className='badge'
                                  style={{ color: '#723DBE', fontSize: '12px' }}
                                >
                                  7
                                </span>
                                Kiambu <FontAwesomeIcon icon={faEllipsisV} />
                              </a>
                              <a
                                className='btn mt-1 visit-item'
                                style={{
                                  backgroundColor: '#ffff',
                                  borderColor: '#898989'
                                }}
                              >
                                <span
                                  className='badge'
                                  style={{ color: '#723DBE', fontSize: '12px' }}
                                >
                                  12
                                </span>
                                Mukuru Kwa Reuben{' '}
                                <FontAwesomeIcon icon={faEllipsisV} />
                              </a>
                              <a
                                className='btn mt-1 visit-item'
                                style={{
                                  backgroundColor: '#ffff',
                                  borderColor: '#898989'
                                }}
                              >
                                <span
                                  className='badge'
                                  style={{ color: '#723DBE', fontSize: '12px' }}
                                >
                                  26
                                </span>
                                Mukuru Kwa Njenga{' '}
                                <FontAwesomeIcon icon={faEllipsisV} />
                              </a>
                              <a
                                className='btn mt-1 visit-item'
                                style={{
                                  backgroundColor: '#ffff',
                                  borderColor: '#898989'
                                }}
                              >
                                <span
                                  className='badge'
                                  style={{ color: '#723DBE', fontSize: '12px' }}
                                >
                                  38
                                </span>
                                Baba Dogo <FontAwesomeIcon icon={faEllipsisV} />
                              </a>
                              <br />
                              <a
                                className='btn mt-1 visit-item'
                                style={{
                                  backgroundColor: '#ffff',
                                  borderColor: '#898989'
                                }}
                              >
                                <span
                                  className='badge'
                                  style={{ color: '#723DBE', fontSize: '12px' }}
                                >
                                  41
                                </span>
                                Kosovo <FontAwesomeIcon icon={faEllipsisV} />
                              </a>
                              <br />
                              <a
                                className='btn mt-1 visit-item'
                                style={{
                                  backgroundColor: '#ffff',
                                  borderColor: '#898989'
                                }}
                              >
                                <span
                                  className='badge'
                                  style={{ color: '#723DBE', fontSize: '12px' }}
                                >
                                  24
                                </span>
                                Mukuru Kayaba{' '}
                                <FontAwesomeIcon icon={faEllipsisV} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='col-md-9'>
                        <div className='row'>
                          <div className='card col-md-12 mt-3'>
                            <div className='card-body'>
                              <p className='text-muted'>KEY ISSUES</p>
                              <div className='row'>
                                <div className='issue mt-3'>
                                  Wrong Prescription{' '}
                                  <FontAwesomeIcon icon={faEllipsisV} />
                                  <p className='text-muted'>Kosovo</p>
                                </div>
                                {/* another */}
                                <div
                                  className='issue mt-3'
                                  style={{
                                    borderStyle: 'solid',
                                    borderWidth: 'thin',
                                    borderColor: 'blueviolet'
                                  }}
                                >
                                  Opened Late{' '}
                                  <FontAwesomeIcon icon={faEllipsisV} />
                                  <p className='text-muted'>Kiambu</p>
                                </div>
                                {/* Another issue */}
                                <div className='issue mt-3'>
                                  Basd Receipts{' '}
                                  <FontAwesomeIcon icon={faEllipsisV} />
                                  <p className='text-muted'>New York</p>
                                </div>
                                {/* Another */}
                                <div className='issue mt-3'>
                                  Late Check in{' '}
                                  <FontAwesomeIcon icon={faEllipsisV} />
                                  <p className='text-muted'>Mathare</p>
                                </div>
                                {/* Another */}
                                <div className='issue mt-3'>
                                  Delay in Lab{' '}
                                  <FontAwesomeIcon icon={faEllipsisV} />
                                  <p className='text-muted'>Kiambu</p>
                                </div>
                                {/* Another */}
                                <div className='issue mt-3'>
                                  Careless wate discharge{' '}
                                  <FontAwesomeIcon icon={faEllipsisV} />
                                  <p className='text-muted'>Kiambu</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Row 2 */}
                        <div className='row'>
                          <div className='card col-md-12 mt-3'>
                            <div className='card-body'>
                              <p className='text-muted'>MONITORING PERIOD</p>
                              <div className='row'>
                                <div className='date-dropdown'>
                                  <button className='btn btn-light'>Day</button>
                                  <div className='dropdown-content'>
                                    <a href='#'> 1</a>
                                    <a href='#'>2</a>
                                    <a href='#'>3</a>
                                    <a href='#'>4</a>
                                  </div>
                                </div>
                                <div className='date-dropdown'>
                                  <button className='btn btn-light'>
                                    Week
                                  </button>
                                  <div className='dropdown-content'>
                                    <a href='#'> Week 1</a>
                                    <a href='#'>Week 2</a>
                                    <a href='#'>Week 3</a>
                                    <a href='#'>Week 4</a>
                                  </div>
                                </div>
                                <div className='date-dropdown'>
                                  <button
                                    className='btn btn-light'
                                    style={{
                                      color: 'blueviolet',
                                      borderStyle: 'solid',
                                      borderColor: 'blueviolet',
                                      borderWidth: 'thin'
                                    }}
                                  >
                                    Month
                                  </button>
                                  <div className='dropdown-content'>
                                    <a href='#'> Jan</a>
                                    <a href='#'> Feb</a>
                                    <a href='#'> Mar</a>
                                    <a href='#'> Apr</a>
                                    <a href='#'> May</a>
                                    <a href='#'> Jun</a>
                                    <a href='#'> Jul</a>
                                    <a href='#'> Aug</a>
                                    <a href='#'> Sep</a>
                                    <a href='#'> Oct</a>
                                    <a href='#'> Nov</a>
                                    <a href='#'> Nov</a>
                                  </div>
                                </div>
                                <div className='date-dropdown'>
                                  <button className='btn btn-light'>
                                    Year
                                  </button>
                                  <div className='dropdown-content'>
                                    <a href='#'> </a>
                                    <a href='#'> 2010</a>
                                    <a href='#'> 2011</a>
                                    <a href='#'> 2012</a>
                                    <a href='#'> 2013</a>
                                    <a href='#'> 2014</a>
                                    <a href='#'> 2015</a>
                                    <a href='#'> 2016</a>
                                    <a href='#'> 2017</a>
                                    <a href='#'> 2018</a>
                                    <a href='#'> 2019</a>
                                    <a href='#'> 2020</a>
                                  </div>
                                </div>{' '}
                                &nbsp;
                                <button
                                  className='btn btn-light'
                                  style={{
                                    marginLeft: '10px',
                                    color: 'blueviolet'
                                  }}
                                  name='daterange'
                                  value='10 Dec 2019 - 10 Jan 2020'
                                >
                                  10 Dec 2019 - 10 Jan 2020
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Row 3 for charts */}
                        <div className='row chart-items'>
                          <div className=' col-md-12 mt-3'>
                            <div className='row'>
                              <div className='card col-md-4 mt-2'>
                                <h6>Foot Fall</h6>
                                <p className='chart-value'>13k</p>
                                <p className='text-muted'>Patients</p>
                                <div style={{ color: '#65fa92' }}>
                                  <FontAwesomeIcon icon={faCaretUp} /> +0.2{' '}
                                </div>
                                <Chart />
                              </div>
                              <div className='card col-md-4 mt-2'>
                                <h6>Patient Satisfaction</h6>
                                <p className='chart-value'>7.8</p>
                                <p className='text-muted'>NPS </p>

                                <div style={{ color: 'red' }}>
                                  <FontAwesomeIcon icon={faCaretDown} /> -0.1{' '}
                                </div>
                                <Patient />
                              </div>

                              <div className='card col-md-4 mt-2'>
                                <h6>Revenue</h6>
                                <p className='chart-value'>4.2m</p>
                                <p className='text-muted'>Kenyan Shillings</p>
                                <div style={{ color: '#65fa92' }}>
                                  <FontAwesomeIcon icon={faCaretUp} /> +2.4{' '}
                                </div>
                                <Revenue />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Row 4 - staff */}
                        <div className='row'>
                          <div className='card col-md-12 mt-3'>
                            <div className='card-body'>
                              <p>Staff Performance</p>
                              <table class='table table-responsive'>
                                <thead>
                                  <tr>
                                    <th scope='col'>
                                      N<sup>O</sup>
                                    </th>
                                    <th scope='col'>Staff Name</th>
                                    <th scope='col'>Efficiency Delta</th>
                                    <th scope='col'>NPS Delta</th>
                                    <th scope='col'>Efficiency</th>
                                    <th scope='col'>Reported Issues</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope='row'>1</th>
                                    <td style={{ color: '#723DBE' }}>
                                      Mercy Mukoya
                                    </td>
                                    <td>
                                      1.3 &nbsp; +0.2{' '}
                                      <FontAwesomeIcon
                                        icon={faCaretUp}
                                        style={{ color: 'lawngreen' }}
                                      />{' '}
                                    </td>
                                    <td>
                                      1.2 +0.3{' '}
                                      <FontAwesomeIcon
                                        icon={faCaretUp}
                                        style={{ color: 'lawngreen' }}
                                      />
                                    </td>
                                    <td>
                                      96%
                                      <div className='progress'>
                                        <div
                                          className='efficiency-bar'
                                          role='progressbar'
                                          aria-valuenow='96'
                                          aria-valuemin='0'
                                          aria-valuemax='100'
                                          style={{
                                            width: '96%'
                                          }}
                                        ></div>
                                      </div>
                                    </td>
                                    <td>
                                      3
                                      <div className='progress'>
                                        <div
                                          className='efficiency-bar'
                                          role='progressbar'
                                          aria-valuenow='3'
                                          aria-valuemin='0'
                                          aria-valuemax='100'
                                          style={{ width: '3%' }}
                                        ></div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope='row'>2</th>
                                    <td style={{ color: '#723DBE' }}>
                                      Kennedy Ayako
                                    </td>
                                    <td>
                                      1.8 &nbsp; +0.4{' '}
                                      <FontAwesomeIcon
                                        icon={faCaretUp}
                                        style={{ color: 'lawngreen' }}
                                      />
                                    </td>
                                    <td>
                                      1.8 +0.2{' '}
                                      <FontAwesomeIcon
                                        icon={faCaretUp}
                                        style={{ color: 'lawngreen' }}
                                      />
                                    </td>
                                    <td>
                                      92%
                                      <div className='progress'>
                                        <div
                                          className='efficiency-bar'
                                          role='progressbar'
                                          aria-valuenow='92'
                                          aria-valuemin='0'
                                          aria-valuemax='100'
                                          style={{ width: '92%' }}
                                        ></div>
                                      </div>
                                    </td>
                                    <td>
                                      6
                                      <div className='progress'>
                                        <div
                                          className='efficiency-bar'
                                          role='progressbar'
                                          aria-valuenow='6'
                                          aria-valuemin='0'
                                          aria-valuemax='100'
                                          style={{ width: '6%' }}
                                        ></div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope='row'>3</th>
                                    <td style={{ color: '#723DBE' }}>
                                      Stephanie Tomsett
                                    </td>
                                    <td>2.7 &nbsp; 2.5</td>
                                    <td>2.0 &nbsp; 1.8</td>
                                    <td>
                                      58%
                                      <div className='progress'>
                                        <div
                                          className='efficiency-bar'
                                          role='progressbar'
                                          aria-valuenow='58'
                                          aria-valuemin='0'
                                          aria-valuemax='100'
                                          style={{ width: '58%' }}
                                        ></div>
                                      </div>
                                    </td>
                                    <td>
                                      1
                                      <div className='progress'>
                                        <div
                                          className='efficiency-bar'
                                          role='progressbar'
                                          aria-valuenow='1'
                                          aria-valuemin='0'
                                          aria-valuemax='100'
                                          style={{ width: '1%' }}
                                        ></div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope='row'>3</th>
                                    <td style={{ color: '#723DBE' }}>
                                      Faith Kityo
                                    </td>
                                    <td>
                                      2.8 &nbsp; -0.5{' '}
                                      <FontAwesomeIcon
                                        icon={faCaretDown}
                                        style={{ color: 'red' }}
                                      />
                                    </td>
                                    <td>
                                      2.5 &nbsp; -2.1{' '}
                                      <FontAwesomeIcon
                                        icon={faCaretDown}
                                        style={{ color: 'red' }}
                                      />
                                    </td>
                                    <td>
                                      74%
                                      <div className='progress'>
                                        <div
                                          className='efficiency-bar'
                                          role='progressbar'
                                          aria-valuenow='74'
                                          aria-valuemin='0'
                                          aria-valuemax='100'
                                          style={{ width: '74%' }}
                                        ></div>
                                      </div>
                                    </td>
                                    <td>
                                      8
                                      <div className='progress'>
                                        <div
                                          className='efficiency-bar'
                                          role='progressbar'
                                          aria-valuenow='8'
                                          aria-valuemin='0'
                                          aria-valuemax='100'
                                          style={{ width: '8%' }}
                                        ></div>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Metrics;
