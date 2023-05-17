const whyUs = (props)=>{
    return(
        <div class="col-md-3 d-flex align-items-stretch mb-3">
                    <div class="card card-3 w-100 card-button" onclick="window.location=''">
                        <div class="card-body">
                            <div class="card-content p-1">
                                <div class="box-icon mb-3 text-white">
                                    <img src={props.image} alt="why us"/>
                                </div>
                                <p class="mb-3 font__size__16">
                                    {props.title}
                                </p>
                                <p class="mb-0 font__size__14">
                                    {props.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default whyUs;
