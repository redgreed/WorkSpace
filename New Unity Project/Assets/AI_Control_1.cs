using UnityEngine;
using System.Collections;

public class AI_Control_1 : MonoBehaviour 
{
	public GameObject player;
	// Use this for initialization
	private NavMeshAgent nav;
	
	void Start()
	{
		nav = GetComponent<NavMeshAgent>();
	}
	// Update is called once per frame
	void Update () 
	{
		Start ();
		if (nav.remainingDistance < 16)
		{
			Vector3 playercords = player.transform.position;
			nav.destination = playercords;
		}
	}
}

