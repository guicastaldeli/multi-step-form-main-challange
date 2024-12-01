//Container
    const container = document.querySelector('.---container');

    //Steps
        //Container
        const cntSteps = document.querySelector('.-st');

        //First
        const fstStep = document.getElementById('fs-');

        //Second
        const sndStep = document.getElementById('s-');

        //Third
        const trdStep = document.getElementById('t-');

        //Forth
        const fthStep = document.getElementById('fth-');
    //

    //Sections
        //Your Info
        const dyi = document.querySelector('.--fst-yi');

        //Select Plan
        const dsp = document.querySelector('.--snd-sp');

        //Add-ons
        const dao = document.querySelector('.--trd-ao');

        //Summary
        const dsm = document.querySelector('.--fth-sm');

        //Final
            const cf = document.createElement('div');
            cf.className = '--cf';

            const tx = document.createElement('h1');
            tx.id = 'tx-';
            tx.textContent = 'Thank you!';

            const txs = document.createElement('p');
            txs.id = 'txs-';
            txs.innerHTML= 'Thanks for confirming your subscription! We hope you have <br> fun using our platform. If you ever need support, please feel <br> free to email us at support@loremgaming.com.';

            const thSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80">
                            <g fill="none"><circle cx="40" cy="40" r="40" fill="#F9818E"/>
                            <path fill="#E96170" d="M48.464 79.167c.768-.15 1.53-.321 2.288-.515a40.04 40.04 0 0 0 3.794-1.266 40.043 40.043 0 0 0 3.657-1.63 40.046 40.046 0 0 0 12.463-9.898A40.063 40.063 0 0 0 78.3 51.89c.338-1.117.627-2.249.867-3.391L55.374 24.698a21.6 21.6 0 0 0-15.332-6.365 21.629 21.629 0 0 0-15.344 6.365c-8.486 8.489-8.486 22.205 0 30.694l23.766 23.775Z"/><path fill="#FFF" d="M40.003 18.333a21.58 21.58 0 0 1 15.31 6.351c8.471 8.471 8.471 22.158 0 30.63-8.47 8.47-22.156 8.47-30.627 0-8.47-8.472-8.47-22.159 0-30.63a21.594 21.594 0 0 1 15.317-6.35Zm9.865 15c-.316.028-.622.15-.872.344l-12.168 9.13-5.641-5.642c-1.224-1.275-3.63 1.132-2.356 2.356l6.663 6.663c.56.56 1.539.63 2.173.156l13.326-9.995c1.122-.816.43-2.993-.956-3.013a1.666 1.666 0 0 0-.17 0Z"/>
                            </g>
                            </svg>`
            const divSvg = document.createElement('div');
            divSvg.innerHTML = thSvg;
            thSvg.id = 't-svg';
            divSvg.id = 'd-svg';

            //Append
                cf.append(divSvg);
                cf.append(tx);
                cf.append(txs);

                container.append(cf);
            //
        //
    //
//

//Check Infos...
    const i = dyi.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');
    const r = dsp.querySelectorAll('input[type="radio"]');
    const c = dao.querySelectorAll('input[type="checkbox"]');

    function checkInfo__() {
        const er = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const pr = /^\+1 \(\d{3}\) \d{3}-\d{4}$/;

        const val = [
            () => Array.from(i).every(is => {
                if(is.type === 'email') {
                    return is.value.trim() !== '' && er.test(is.value);
                }

                if(is.type === 'tel') {
                    return is.value.trim() !== '' && pr.test(is.value);
                }
                return true;
            }),
            () => Array.from(r).some(rs => rs.checked),
            () => Array.from(c).some(cs => cs.checked),
            () => true,
        ];

        function empty(si) {    
            if(si === 0) {
                i.forEach(is => {
                    if(is.value.trim() === '') {
                        is.classList.add('be-');
                        const err = `${is.id}-e`;
    
                        if(!document.getElementById(err)) {
                            const em = document.createElement('label');
                            em.className = 'em-';
                            em.id = err;
                            em.htmlFor = is.id;
    
                            em.textContent = 'This field is required';
    
                            is.insertAdjacentElement('afterend', em);
                        }
                    }
                })
            }

            if(si === 1) {
                const lr = dsp.querySelectorAll('label');
                const sr = dsp.querySelectorAll('span[id="sa"]');

                r.forEach(rs => {
                    rs.classList.add('emrb-')
                })

                lr.forEach(r => {
                    r.classList.add('emr-');
                });

                sr.forEach(r => {
                    r.classList.add('emrs-');
                })
            }

            if(si === 2) {
                const ddao = dao.querySelectorAll('div[class="ddao"]');
                const lc = dao.querySelectorAll('label');
                const sc = dao.querySelectorAll('span[id="gt"]');
                const pcb = dao.querySelectorAll('p[id="gt"]');

                ddao.forEach(c => {
                    c.classList.add('emrb-');
                })

                lc.forEach(c => {
                    c.classList.add('emr-');
                });

                sc.forEach(c => {
                    c.classList.add('emrs-');
                });

                pcb.forEach(c => {
                    c.classList.add('emp-');
                });
            }
        }

        //Steps
            //Button
                const nsp = 'Next Step';
                nsp.id = 'ns-t-';
                
                const cnf = 'Confirm';
                cnf.id = 'cf-t';

                const btn = document.createElement('button');
                btn.id = '-btn';
                btn.textContent = nsp;

                container.append(btn);
            //

            //Back Button
                const bBtn = document.createElement('button');
                bBtn.id = '-b-btn';
                bBtn.textContent = 'Go Back';

                //container.append(bBtn)
            //

            const steps = [ dyi, dsp, dao, dsm, cf ];
            const nSteps = [ fstStep, sndStep, trdStep, fthStep ];

            let currStep = 0;

            function init() {
                steps.forEach((s, i) => {
                    s.style.display = i === currStep ? 'block' : 'none';
                });

                nSteps.forEach((s, i) => {
                    s.style.color = i === currStep ? '#002049' : '';
                    s.style.backgroundColor = i === currStep ? '#BEE3FE' : 'transparent';
                    s.style.border = i === currStep ? '0.1rem solid #BEE3FE' : '0.1rem solid #FFFF';
                })
            }

            function back() {
                steps[currStep].style.display = 'none';
                nSteps[currStep].style.color = '#FFFF';
                nSteps[currStep].style.backgroundColor = 'transparent';

                currStep--;

                if(currStep < steps.length) {
                    steps[currStep].style.display = 'block';

                    nSteps[currStep].style.color = '#002049';
                    nSteps[currStep].style.backgroundColor = '#BEE3FE';
                    nSteps[currStep].style.border = '0.1rem solid #BEE3FE';
                }

                if(currStep === 0) {
                    bBtn.remove();
                }

                if(currStep < 4) {
                    btn.textContent = nsp;
                    btn.style.backgroundColor = '#194A8A';

                    /* hover */
                        btn.addEventListener('mouseenter', () => {
                            btn.style.backgroundColor = '#03295A';
                        });

                        btn.addEventListener('mouseleave', () => {
                            btn.style.backgroundColor = '#194A8A';
                        });
                    /* */
                }
            }


            function next() {
                //JSON
                    async function load__() {
                        try {
                            const res = await fetch('./pa.json');
                            const data = await res.json();

                            return {
                                plans: data.plans,
                                addons: data.addons
                            };
                        } catch (err) {
                            console.log(err);
                        }
                    }
                //

                if(!val[currStep]()) {
                    empty(currStep);

                    return;
                }

                steps[currStep].style.display = 'none';
                nSteps[currStep].style.backgroundColor = 'transparent';
                nSteps[currStep].style.color = '#FFFF';

                currStep++;
                
                if(currStep < steps.length) {
                    steps[currStep].style.display = 'block';
                
                }

                if(currStep < steps.length - 1) {
                    nSteps[currStep].style.backgroundColor = '#BEE3FE';
                    nSteps[currStep].style.color = '#002049';
                    nSteps[currStep].style.border = '0.1rem solid #BEE3FE';
                }

                if(currStep > 0 && !document.getElementById('-b-btn')) {
                    container.append(bBtn);
                }

                //Toggle
                const toggle = document.getElementById('cb-');

                //Radio
                    if(currStep === 1) {
                        load__().then((data) => {
                            if(data) {
                                const pi = dsp.querySelectorAll('label');
                                const { plans } = data;
                                const pk = Object.keys(plans);

                                //svg
                                    const svg = dsp.querySelectorAll('img');
                                //

                                pi.forEach((p, i) => {
                                    if(i < pk.length) {
                                        const plan = plans[pk[i]];
                                        
                                        const nd = Array.from(p.childNodes).find(node => node.nodeType === Node.TEXT_NODE);

                                        if(nd) {
                                            nd.textContent = plan.name;
                                        }

                                        //svg
                                            const img = svg[i];
                                            if(img) {
                                                img.src = plan.icon;
                                            }
                                        //

                                        //Price
                                            const s = p.querySelector('span');
                                            const mp = `$${plan.mprice}/mo`;
                                            const yp = `$${plan.yprice}/yr`;

                                            if(s) {
                                                s.textContent = mp;
                                            }

                                            toggle.addEventListener('change', () => {
                                                let ym = p.querySelector('.ym');

                                                /* styles */
                                                    const border = dsp.querySelectorAll('input');
                                                    const blb = dsp.querySelectorAll('label');
                                                /* */

                                                if(toggle.checked) {
                                                    if(s) {
                                                        s.textContent = yp;

                                                        border.forEach(b => {
                                                            b.style.height = '7.3rem';
                                                            b.style.transform = 'translate(-10%, -81.6%)';
                                                        });

                                                        blb.forEach(b => {
                                                            b.style.transform = 'translate(0%, -6%)';
                                                        })

                                                        if(!ym) {
                                                            ym = document.createElement('p');
                                                            ym.className = 'ym';
                                                            ym.textContent = '2 months free';

                                                            p.append(ym);
                                                        }
                                                    }
                                                } else {
                                                    s.textContent = mp;

                                                    border.forEach(b => {
                                                        b.style.height = '6.5rem';
                                                        b.style.transform = 'translate(-10%, -90%)';
                                                    })

                                                    blb.forEach(b => {
                                                        b.style.transform = 'translate(0%, 0%)';
                                                    })

                                                    if(ym) {
                                                        ym.remove();
                                                    }
                                                }
                                            });
                                        //
                                    }
                                });
                                
                            }
                        })
                    }
                //

                //Checkbox
                    if(currStep === 2) {
                        load__().then((data) => {
                            if(data) {
                                const ai = dao.querySelectorAll('label');
                                const { addons } = data;
                                const ak = Object.keys(addons);

                                ai.forEach((a, i) => {
                                    if(i < ak.length) {
                                        const addon = addons[ak[i]];

                                        const nd = Array.from(a.childNodes).find(node => node.nodeType === Node.TEXT_NODE);

                                        if(nd) {
                                            nd.textContent = addon.name;
                                        }

                                        const s = a.querySelector('span');
                                        if(s) {
                                            s.textContent = addon.info;
                                        }

                                        //Price
                                            const sp = a.querySelector('p');
                                            const mp = `+$${addon.mprice}/mo`;
                                            const yp = `+$${addon.yprice}/yr`;

                                            if(!toggle.checked) {
                                                if(sp) {
                                                    sp.textContent = mp;
                                                }
                                            } else {
                                                if(sp) {
                                                    sp.textContent = yp;
                                                }
                                            }
                                        //
                                    }
                                })
                            }
                        })
                    }

                    //Border
                        const gtrd = document.getElementById('gtrd-');

                        if(gtrd) {
                            const border = gtrd.querySelectorAll('div');

                            if(dao) {
                                c.forEach(cs => {
                                    cs.addEventListener('click', () => {
                                        const i = [...c].indexOf(cs);

                                        if(cs.checked) {
                                            border[i].style.backgroundColor = '#f7f9ff';
                                            border[i].style.border = '0.07rem solid #5245FC';
                                        } else {
                                            border[i].style.backgroundColor = '#FFFF';
                                            border[i].style.border = '0.07rem solid #d0d0d0';
                                        }
                                    });
                                });
                            }
                        }
                    //
                //

                //Total
                    if(currStep === 3) {
                        //Radios
                            const wp = document.getElementById('-wp');
                            const wpp = document.getElementById('-wpp');

                            const sr = dsp.querySelector('input[type="radio"]:checked');
                            const sl = document.querySelector(`label[for="${sr.id}"]`);

                            if(sl) {
                                let lt = '';

                                sl.childNodes.forEach(node => {
                                    if(node.nodeType === 3) {
                                        lt += node.nodeValue.trim();
                                    }
                                });

                                const pt = sl.querySelector('span') ? sl.querySelector('span').textContent.trim() : '';

                                //Info
                                    //M or Y
                                        const m = ' (Monthly)';
                                        const yr = ' (Yearly)';

                                        if(!toggle.checked) {
                                            if(wp) {
                                                wp.textContent = lt + m;
                                            }
                                        } else {
                                            if(wp) {
                                                wp.textContent = lt + yr;
                                            }
                                        }
                                    //

                                    //Price
                                        //Monthly
                                            if(pt.includes('$9/mo')) {
                                                wpp.innerHTML = pt;
                                                wpp.style.left = '1rem';
                                            } else if(pt.includes('$12/mo')) {
                                                wpp.innerHTML = pt;
                                                wpp.style.left = '-0.01rem';
                                            } else if(pt.includes('$15/mo')) {
                                                wpp.innerHTML = pt;
                                                wpp.style.left = '1.8rem';
                                            }
                                        //
                                        
                                        //Yearly
                                            if(pt.includes('$90/yr')) {
                                                wpp.innerHTML = pt;
                                                wpp.style.left = '1.8rem'
                                            } else if(pt.includes('$120/yr')) {
                                                wpp.innerHTML = pt;
                                                wpp.style.left = '0.6rem';
                                            } else if(pt.includes('$150/yr')) {
                                                wpp.innerHTML = pt;
                                                wpp.style.left = '2.45rem';
                                            }
                                        //
                                    //
                                //
                            }
                        //

                        //Checkboxes
                            const wao = document.getElementById('-wao');
                            const ap = document.getElementById('-ap');

                            const sc = dao.querySelectorAll('input[type="checkbox"]:checked');

                            if(sc.length > 0) {
                                let lt = '';
                                let pt = '';
                                
                                sc.forEach(s => {
                                    const scl = dao.querySelector(`label[for="${s.id}"]`);

                                    if(scl) {
                                        scl.childNodes.forEach(node => {
                                            if(node.nodeType === 3) {
                                                lt += `<span>${node.nodeValue.trim()}</span> \n`;
                                            }
                                        });
        
                                        const p = scl.querySelector('p');
                                        if(p) {
                                            pt += p.textContent.trim() + '<br></br>';
                                        }
                                    }
                                });

                                wao.innerHTML = lt;
                                ap.innerHTML = pt;
                            }
                        //
                        
                        //Confirm
                            btn.textContent = cnf;
                            btn.style.backgroundColor = '#483EFF';

                            /* hover */
                                btn.addEventListener('mouseenter', () => {
                                    btn.style.backgroundColor = '#938CFE';
                                });

                                btn.addEventListener('mouseleave', () => {
                                    btn.style.backgroundColor = '#483EFF';
                                });
                            /* */
                        //

                        //Change
                            if(!document.getElementById('-cg-b')) {
                                //Button
                                    const cBtn = document.createElement('button');
                                    cBtn.id = '-cg-b';
                                    cBtn.textContent = 'Change';
                                    
                                    wp.append(cBtn);
                                //
    
                                cBtn.addEventListener('click', () => {
                                    btn.textContent = nsp;
                                    steps[currStep].style.display = 'none';
                                    
                                    nSteps[currStep].style.color = '#FFFF';
                                    nSteps[currStep].style.backgroundColor = 'transparent';

                                    currStep -= 2;
    
                                    if(currStep < steps.length) {
                                        steps[currStep].style.display = 'block';

                                        nSteps[currStep].style.color = '#002049';
                                        nSteps[currStep].style.backgroundColor = '#BEE3FE';
                                    }

                                    //Button
                                        btn.textContent = nsp;
                                        btn.style.backgroundColor = '#194A8A';

                                        /* hover */
                                            btn.addEventListener('mouseenter', () => {
                                                btn.style.backgroundColor = '#03295A';
                                            });

                                            btn.addEventListener('mouseleave', () => {
                                                btn.style.backgroundColor = '#194A8A';
                                            });
                                        /* */
                                    //
                                });
                            }
                        //

                        //Total
                            //M or Y
                                const tym = document.getElementById('-t');

                                //Texts
                                    const tm = '(per month)';
                                    const ty = '(per year)';
                                    
                                    if(!toggle.checked) {
                                        if(tym && !tym.innerHTML.includes(tm)) {
                                            tym.innerHTML = tym.innerHTML.replace(ty, '') + tm;
                                        }
                                    } else {
                                        if(tym && !tym.innerHTML.includes(ty)) {
                                            tym.innerHTML = tym.innerHTML.replace(tm, '') + ty;
                                        }

                                        if(tym && tym.innerHTML.includes(tm)) {
                                            tym.innerHTML = tym.innerHTML.replace(tm, '');
                                        }
                                    }
                                //
                            //

                            //Total
                                function calcTotal__() {
                                    const sp = dsp.querySelector('input[type="radio"]:checked');
                                    const l = document.querySelector(`label[for="${sp.id}"]`);

                                    const sa = dao.querySelectorAll('input[type="checkbox"]:checked');
                                    
                                    if(sp && sa) {
                                        //Plan
                                            let lt = '';
                                            let tp = '';

                                            sp.childNodes.forEach(node => {
                                                if(node.nodeType === 3) {
                                                    lt += node.nodeValue.trim();
                                                }
                                            })
                                            
                                            if(l) {
                                                const pt = l.querySelector('span') ? l.querySelector('span').textContent.trim() : '';
                                                const price = parseFloat(pt.replace(/[^\d.-]/g, ''));

                                                tp += price;
                                            }


                                        //
                                        
                                        //Add-on
                                            let ta = 0;

                                            sa.forEach(s => {
                                                const sao = dao.querySelector(`label[for="${s.id}"]`);

                                                if(sao) {
                                                    const pt = sao.querySelector('p') ? sao.querySelector('p').textContent.trim() : '';
                                                    const price = parseFloat(pt.replace(/[^\d.-]/g, ''));

                                                    ta += price;
                                                }
                                            });
                                        //

                                        //Total
                                            const rp = parseFloat(tp.replace(/[^\d.-]/g, '')) || 0;
                                            const total = ta += rp;

                                            //Text
                                                const tpp = document.getElementById('-tp');
                                                const mt = '/mo';
                                                const yr = '/yr';

                                                //M or Y
                                                    if(!toggle.checked) {
                                                        if(tpp) {
                                                            tpp.textContent = `$${total}${mt}`;
                                                        }
                                                    } else {
                                                        if(tpp) {
                                                            tpp.innerHTML = `&nbsp;&nbsp;&nbsp; $${total}${yr}`;
                                                        }
                                                    }
                                                //
                                            //
                                        //
                                    }
                                }

                                calcTotal__();
                            //
                        //
                    }

                    if(currStep === 4) {
                        const st = document.querySelector('.-st');
                        const dsvg = document.getElementById('p-svg');

                        st.style.top = '26px';
                        dsvg.style.top = '-6.25rem'

                        nSteps[currStep - 1].style.color = '#FFFF'
                        nSteps[currStep - 1].style.backgroundColor = '#BEE3FE';

                        btn.remove();
                        bBtn.remove();
                    }
                //
            }
        //

        //Fill
            function fill() {
                //regex
                    let rg = false;

                    function regex() {
                        //Email
                            i.forEach(is => {
                                const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

                                if(is.type === 'email' && is.value.trim() !== '') {
                                    if(!regex.test(is.value)) {
                                        rg = true;

                                        is.classList.add('be-');
                                        const eId = `${is.id}-e`;

                                        if(!document.getElementById(eId)) {
                                            const em = document.createElement('label');

                                            em.classList = 'ema-';
                                            em.id = eId;
                                            em.htmlFor = is.id;

                                            em.textContent = 'Please enter a valid email address';

                                            //Append
                                            is.insertAdjacentElement('afterend', em);
                                        }
                                    }
                                }
                            })
                        //
                    }

                    function pRegex() {
                        //Phone
                            i.forEach(is => {
                                if(is.type === 'tel' && is.value.trim() !== '') {
                                    const regex = /^\+1 \(\d{3}\) \d{3}-\d{4}$/;

                                    is.addEventListener('input', () => {
                                        const dg = is.value.replace(/\D/g, '').replace(/^1/, '');
                                        let formt = '+1 ';

                                        if (dg.length > 10) {
                                            formt += `(${dg.slice(0, 3)}) ${dg.slice(3, 6)}-${dg.slice(6, 10)}`;
                                        } else if (dg.length > 6) {
                                            formt += `(${dg.slice(0, 3)}) ${dg.slice(3, 6)}-${dg.slice(6)}`;
                                        } else if (dg.length > 3) {
                                            formt += `(${dg.slice(0, 3)}) ${dg.slice(3)}`;
                                        } else if (dg.length > 0) {
                                            formt += `(${dg.slice(0, 3)}`;
                                        } else {
                                            formt += `${dg}`;
                                        }
                            
                                        is.value = formt;
                                    });

                                    if(!regex.test(is.value.trim())) {
                                        is.classList.add('be-');
                                        const eId = `${is.id}-e`;

                                        if(!document.getElementById(eId)) {
                                            const em = document.createElement('label');

                                            em.className = 'emb-';
                                            em.id = eId;
                                            em.htmlFor = is.id;

                                            em.textContent = 'Please enter a valid phone number';

                                            is.insertAdjacentElement('afterend', em);
                                        }
                                    }
                                }
                            });
                        //
                    }

                    //Execs...
                        const p = document.getElementById('-p');
                        p.addEventListener('input', () => pRegex());

                        btn.addEventListener('click', () => regex());
                        btn.addEventListener('click', () => pRegex());
                    //
                //

                //Input
                    i.forEach(is => {
                        is.addEventListener('input', () => {
                            is.classList.remove('be-');

                            const eId = `${is.id}-e`;
                            const em = document.getElementById(eId);

                            if(em) {
                                em.remove();
                            }
                        });
                    });
                //

                //Radio
                    r.forEach(rs => {
                        rs.addEventListener('change', () => {
                            const lr = dsp.querySelectorAll('label');
                            const sr = dsp.querySelectorAll('span');
                            
                            lr.forEach(l => {
                                l.classList.remove('emr-');
                            });

                            sr.forEach(s => {
                                s.classList.remove('emrs-');
                            });
                        });
                    });

                    const rrs = dsp.querySelectorAll('input[type="radio"]');

                    rrs.forEach(rs => {
                        r.forEach(sr => {
                            sr.addEventListener('change', () => {
                                rs.classList.remove('emrb-');
                            })
                        })
                    })
                //

                //Checkbox
                    c.forEach(cb => {
                        cb.addEventListener('change', () => {
                            const lc = dao.querySelectorAll('label');
                            const sc = dao.querySelectorAll('span[id="gt"]');
                            const pcb = dao.querySelectorAll('p[id="gt"]');

                            lc.forEach(c => {
                                c.classList.remove('emr-');
                            });

                            sc.forEach(c => {
                                c.classList.remove('emrs-');
                            });

                            pcb.forEach(c => {
                                c.classList.remove('emp-');
                            });
                        });
                    });

                    //Border
                        const ddao = dao.querySelectorAll('div[class="ddao"]');

                        ddao.forEach(cb => {
                            c.forEach(c => {
                                c.addEventListener('change', () => {
                                    cb.classList.remove('emrb-')
                                });
                            });
                        });
                    //
                //
            }
        //

        //Listeners
            init();
            fill();

            btn.addEventListener('click', () => empty());

            btn.addEventListener('click', () => next());
            bBtn.addEventListener('click', () => back());
        //
    }

    //Exec...
        checkInfo__();
    //
//