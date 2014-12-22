 #pragma strict

var Effect : Transform;
var MuzzleFlash : Light;
var TheDammage = 100;
var fireOn=1;
var fireRate=.1;

function Start()
{
	MuzzleFlash.enabled=false;
}

function Update ()
{
	if (fireOn==1)
	{
		fireOn=0;
		fire();	
	}
}
function flash() 
{	
	MuzzleFlash.enabled = true;
	yield WaitForSeconds(.1);
	MuzzleFlash.enabled = false;
}
function fire()
{
	var hit : RaycastHit;
	var ray : Ray = Camera.main.ScreenPointToRay(Vector3(Screen.width*0.5, Screen.height*0.5, 0));
	
	if (Input.GetMouseButton(0))
	{
		
		flash();
		if (Physics.Raycast (ray, hit, 100))
		{
			var particleClone = Instantiate(Effect, hit.point, Quaternion.LookRotation(hit.normal));
			Destroy(particleClone.gameObject, 2);
			hit.transform.SendMessage("ApplyDammage", TheDammage, SendMessageOptions.DontRequireReceiver);
		}
	}
	yield WaitForSeconds(fireRate);
	fireOn=1;
	audio.Play(0);
}