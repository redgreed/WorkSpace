using UnityEngine;
using System.Collections;

public class Kill_Plane : MonoBehaviour 
{
	void OnTriggerEnter(Collider other) 
	{
		other.enabled = false;
	}
}
