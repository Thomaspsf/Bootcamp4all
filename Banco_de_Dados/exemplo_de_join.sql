select fp.ID_FUNCIONARIO,
	   f.NM_FUNCIONARIO,
	   fp.ID_PROJETO,
	   p.NM_PROJETO
  from funcionario f
  join funcionario_projeto fp 
  	on F.ID_FUNCIONARIO = fp.ID_FUNCIONARIO 
  join projeto p 
  	on p.ID_PROJETO = fp.ID_PROJETO;
  	   