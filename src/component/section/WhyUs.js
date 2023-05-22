import React from 'react'

const whyUs = (props) => {
  return (
        <div className="col-md-3 d-flex align-items-stretch mb-3">
                    <div className="card card-3 w-100 card-button">
                        <div className="card-body">
                            <div className="card-content p-1">
                                <div className="box-icon mb-3 text-white">
                                    <img src={props.image} alt="why us"/>
                                </div>
                                <p className="mb-3 font__size__16">
                                    {props.title}
                                </p>
                                <p className="mb-0 font__size__14">
                                    {props.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default whyUs
