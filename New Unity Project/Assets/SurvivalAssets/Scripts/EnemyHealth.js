#pragma strict

var Health = 100;
var maxHealth =Health;

function ApplyDammage (TheDammage : int)
{
	Health -= TheDammage;
	if (Health <=maxHealth)
	{
		renderer.material.color=Color.blue;
	}
	if (Health <=(maxHealth*.8))
	{
		renderer.material.color=Color.cyan;
	}
	if (Health <=(maxHealth*.6))
	{
		renderer.material.color=Color.green;
	}
	if (Health <=(maxHealth*.4))
	{
		renderer.material.color=Color.yellow;
	}
	if (Health <=(maxHealth*.2))
	{
		renderer.material.color=Color.red;
	}
	
	if(Health <= 0)
	{
		Dead();
	}
}

function Dead()
{
	Destroy (gameObject);
}