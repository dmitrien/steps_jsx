import React from 'react'
import './TableResult.css';

export function TableResult({ deleteResult, results }) {
  return (
    <>
        <div className="result-list-row-header">
                <span>Дата (ДД.ММ.ГГ)</span>
                <span>Пройдено км</span>
                <span>Действия</span>
        </div>
        <div className="result-list">
                {Array.isArray(results) && results.length > 0
                    ? results.map((item) => (
                        <div className="result-list-row" key={item.id}>
                            <span>{item.date}</span>
                            <span>{item.distance}</span>
                            <div>
                                <p className="button-delete"
                                   onClick={() => deleteResult(item.id)} >
                                    ✘
                                </p>
                            </div>
                        </div>
                    ))
                    : <div>
                        <p className="no-result">Список тренировок пуст</p>
                    </div>
                }
        </div>
    </>
  )
}