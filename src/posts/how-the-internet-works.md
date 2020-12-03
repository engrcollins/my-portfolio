---
title: "How The Internet Works - A Simplified Explanation"
date: "2020-11-27"
author: "Collins Akinbami"
featured: "../images/how-internet-works.jpg"
---
Many people, especially the non-techie folks, always wonder how the internet works. Basically, the internet is a global network of computers for communication. This makes it possible for people with access to connect and communicate - sending and receiving messages, all sorts of files (e.g. doc, gif, html, URL request, audio, videos etc.). But there is more to it than some of us could imagine. 

<center><img src="https://wallpaperaccess.com/download/network-1560160" heigth="30%" width="90%" alt='open source'><br />The Internet. (image from: <a href='https://wallpaperaccess.com/download/network-1560160' target='_BLANK'>wallpaperaccess.com</a>)</center>
<br/>
<p>
In computer networking, to send a message from a computer to another, we have to, at the sending node, specify the destination computer. Thus any computer linked to a network has a unique address that identifies it. This is called <em>Internet Protocol (IP) address (e.g  110.120.202.8).</em> But humans have a hard time remembering that sort of address. For convenience sake, we alias IP addresses with a human readable format called <em>“a Domain Name”</em> e.g Google's network address, 8.8.8.8 has domain name <a>google.com.</a> How is this communication achieved really? We are about to dissect the principles as simply as possible.
</p>

<p>
Let's borrow the highways analogy. We can picture the internet as the whole of road networks linking all locations together in the country. We can say these ranges from walkways and yard paths to multiple complex carriage motorways linking states or cities together. Here, the routers become the interchanges and roundabouts while the network gateways are more like the toll-gates. With these network of roads and pathways anyone can reach anywhere in the country once the destination address is provided. Similarly, a post mail delivery service will look at the zip code first, then the street, then the house number and eventually the intended recipient gets the sent mail. This is exactly what happens in the internet too.

<center><img src="https://image.shutterstock.com/image-photo/network-transportation-concept-600w-1186635823.jpg" heigth="30%" width="90%" alt='road network'><br />The Network of Roads (image from: <a href='https://www.shutterstock.com/image-photo/network-transportation-concept-1186635823' target='_BLANK'>shutterstock.com</a>)</center>
</p>

<p>Every computer needs a protocol stack to communicate on any network and this is usually built into the computer's operating system (i.e. Windows, Unix, etc.). The protocol stack used on the Internet is referred to as the <em>TCP/IP protocol stack.</em> Data is sent over the internet in a manner known as <em>“Packet Switching”</em>. This data being sent is broken into smaller manageable chunks of pieces known as “Packets” – a concept that allows many people to access the internet at the same time. Each of these packets is in form of header and payload. The header contains vital information such as its destination and source IP addresses while the payload is the pieces from the actual data being transferred. With Packet switching, different packets from the same message don't have to follow the same path. This is part of what makes the internet a very swift and robust platform.</p>
<p>
The hardware layer takes care of turning these packets into electronic signal form for transmission over a phone line. In this electronic signal form, the individual packets for a given data travel through many routes with the help of internet protocol (IP) layer which directs packets to specific routers and finally the destination computer using the IP address from its header. When all packets arrive at the destination, they get reassembled into the original data file (by the Transmission Control Protocol (TCP) layer at the destination end). The TCP also directs packets to the intended application on the destination computer using a port number.
<br/>
</p>
<p> 
In-between these destination and source computers/devices are a lot of other network components that do the routing, modulation, demodulation and transmission. And all these happen in a matter of micro-seconds to milliseconds depending on distance and routes. Now let's dive in to the packets transmission and routing.
<br/>
<center><img src="../images/routers.jpg" width="70%" alt='Routers'><br />Packets routes.</center>
<br />
The source computer/device initiates the packets sending with the help of a modem. Data packets traverse the public telephone network using the Radio Frequency (RF) energy which can transmit signals even through walls and other objects. The modem gets these packets onto and off of this RF carrier by modulation and demodulation. Stand-alone modem can be used for connecting a local network (of devices) to the Internet Service Providers(ISPs) while modern cellphones have in-built modems which make it possible for the mobile phones to access the internet via telephone network providers' infrastructures like radio towers. These telephone infrastructures are used because they are readily available and ideal.
<p>
This is where the trick is really; simply put, an ISP provides access for using the internet. Breaking things down, an ISP is a company or firm that manages some special routers, pool of modems and port server, linked together, and also to other ISPs' routers so that messages from the source device(s) or network (of computers) are carried, in form of packets through the ISP network(s) to the destination device(s) or network (of computers). Oh, that's quite long! I know right. The internet consists of this whole infrastructure of networks. Just like I explained earlier, the data packets get passed on from router to router like in a relay race such that all these packets transmission occur within the twinkling of an eyelid.
</p>
</div>

<div>
<p>
<b>The Tiers of Internet Service Providers.</b>
<br/>
There are 3 tiers of Internet service providers, each tier buys access, based on user traffic, from the tier directly above them and sells to those directly below them. All ISPs operate on this exchange of user traffic.
<ol>
<li>Tier 3 ISPs: They are the closest tier to the end consumers of internet. Hence, they provide lines and radio towers connecting different homes and business to the Tier 2 semi-major backbones. They pay for access to the tier-2 ISP(s) based on traffic generated and distribute access to these homes and business.
</li>
<li>
Tier 2 ISPs: They provide and manage semi-major backbone networks of lines in regions and countries that connect to various Tier 1 ISP(s). They pay to and get access from the Tier-3 ISP(s).
</li>
<li>
Tier 1 ISPs: These are the giant firms that provide and manage major backbone networks. They don't pay for traffic, they rather charge other ISPs (down the hierarchy) for access through their network because they have a global reach of locations that are not under the reach of lower ISPs.
</li>
</ol>
</p>
<p>
Generally, ISPs at the same level/tier allow peer traffic through one another's network without paying any recurrent access fee.  These ISPs are called Peers. ISPs achieved this by building infrastructures such as underground sea cables across the oceans for the purpose of connecting to peer ISPs and not end users of internet.
<center><img src="../images/isp-infrastructures.jpg" width="70%" alt='ISP Infrastructures'><br />A Typical ISP Infrastructure.</center>
<br />
A data sent over the internet will journey through the routers and other infrastructure of the ISPs before getting to its destination. The packets most times take the shortest possible routes to reach their destination.
</p>
<p>
This is the simplest approach to knowing how the internet works. Watch out for more of my articles that dissect routing and other core infrastructures on the internet.
</p>
  
