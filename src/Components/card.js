import React, { Component } from "react";


class Card extends Component {

    render() {
        return (
            <div className="container d-flex justify-content-center col-md-6 col-lg-4 ">
                <div className="  my-1" >
                    <div className="card" style={{ width: '18rem', textAlign: 'center' }} >
                        <img src={this.props.card.immagine} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.card.nome} Roll</h5>
                            <p className="card-text">${this.props.card.prezzo}</p>
                            <button onClick={() => this.props.onIncrement(this.props.card)} className="btn btn-primary p-1 mx-2">Aggiungi <span className="badge badge-light bg-light text-dark">{this.props.card.quantità}</span></button>

                            <button onClick={() => this.props.onDelete(this.props.card.id)} className="btn btn-outline-danger">Elimina</button>
                        </div>
                    </div>
                </div >
            </div >
        );
    }
}

export default Card;