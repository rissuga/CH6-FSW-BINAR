const faq = (props)=>{
    return(
        <div className="accordion-item faq__reset mb-3">
                <h2 class="accordion-header" id={props.heading}>
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={props.colapseTarget} aria-expanded="false" aria-controls={props.colapse}>
                    {props.faq}
                  </button>
                </h2>
                <div id={props.colapse} className="accordion-collapse collapse" aria-labelledby={props.heading} data-bs-parent="#accordionFlushExample">
                  <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                </div>
              </div>
    );
}

export default faq;