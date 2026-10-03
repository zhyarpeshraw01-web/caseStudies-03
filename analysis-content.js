/* Revision 3. Team analysis is retained as evidence, with new interpretive notes. */
SOURCES.T6={title:'Tata · circulation and bubble diagrams by the presentation team',file:'Circulation and Bubble diagrams tata.pdf',detail:'Pages 1–3: main hallways, secondary hallways and room-entry branches. Pages 4–6: ground, first and second-floor bubble relationships. Original paths are extracted from the PDF; their geometry and categories are retained. Bubble sizes are diagrammatic, not measured areas.'};
SOURCES.T7={title:'Tata · updated team site and zoning analysis',file:'tata.pdf',detail:'Page 2 supplies entrance and parking positions. Pages 5–7 supply the team’s floor annotations. Page 8 repeats a basement drawing under an incorrect second-floor heading; the original basement designation takes priority. Broad department names follow the original plan legends.'};
SOURCES.M8={title:'MVR · team circulation analysis',file:'mrv circulation.pdf',detail:'Page 1: first-floor patient/visitor and staff/service routes. Page 2: hematology and controlled departmental passages. Page 3: second-floor routes and sterile, clean and dirty OT circulation. Pages 4–5 are blank and are omitted. The source combines staff and service; filters retain that shared geometry.'};
SOURCES.C1={title:'Team comparative analysis board',file:'Comparative Analysis of Cancer Hospitals(1).png',detail:'Supplied visual comparison of healing environment, landscape, form, voids, daylight and movement. Its illustrations communicate the team’s concepts; they are not used to establish dimensions, room positions or proof of complete traffic separation.'};
SOURCES.M2.detail='Newly supplied 23-page team analysis. Site: pp.2–4. Zoning: pp.5–22. Ground circulation: p.23. Page 10 repeats the ground-floor table beneath a first-floor title; the first-floor plan and original M1 room labels take priority. Generic repeated legend items are not treated as rooms present on every floor.';

// Every note has a source-plan anchor. They are leader lines, not invented zone edges.
const ANNOTATIONS={
 'tata-site':[
 [343.1,477.1,'Main entrance','Drop-off aligns with the front arrival court.'],
 [457,344.6,'Radiotherapy arrival','The team marks a second entrance at this edge.'],
 [525.6,230.3,'Emergency entrance','Keep the eastern threshold distinct from public arrival.'],
 [748,429,'Visitor parking','Perimeter bays connect to the front approach.'],
 [625,212,'Staff parking','Rear parking is identified separately in the team sheet.'],
 [307,326,'Courtyard sequence','Open spaces sit between linked clinical and admin wings.'],
 [445,116,'Rear support edge','Support destinations face the rear driveway network.'],
 [412,609,'Road / arrival junction','Wayfinding must resolve the turn into the drop-off.']],
 'tata-basement':[
 [518,160,'Laundry + soiled linen','Separate handling tasks occupy the upper service zone.'],
 [454,426,'Central sterile supply','Wash, packing and sterile storage require a controlled sequence.'],
 [516,711,'Lift + stair junction','The vertical interface connects support and clinical levels.'],
 [733,877,'Reception / waiting','Public waiting forms the treatment approach.'],
 [463,986,'Preparation + planning','Mould preparation and planning support treatment rooms.'],
 [489,1323,'Named treatment rooms','Tomotherapy, Radixact and LINAC remain distinct.'],
 [820,1150,'Maze-like room access','Read the turning entry geometry at each treatment room.'],
 [295,625,'Operational threshold','Service handling and patient access need clear control.']],
 'tata-ground':[
 [562,500,'OPD + counselling','Repeated rooms line the public clinical wing.'],
 [635,175,'Imaging / radiotherapy','The combined department occupies the upper clinical block.'],
 [165,640,'Academic / administration','The narrow parallel wing has its own internal passage.'],
 [320,160,'Service support','Rear volumes sit apart from the main waiting frontage.'],
 [521,808,'Arrival and lobby','The front lobby begins the public clinical sequence.'],
 [403,553,'Central courtyard','The open centre creates a visual reference between wings.'],
 [576,405,'Department junction','The connecting passage mediates OPD and treatment access.'],
 [166,432,'Room-entry branches','Short branches terminate at rooms off the linear hall.']],
 'tata-first':[
 [630,580,'Day hospital','Treatment bays and recovery occupy the long clinical wing.'],
 [622,170,'Inpatient unit','The upper block separates staying patients from day treatment.'],
 [166,680,'Academic / administration','A parallel work and teaching wing remains connected.'],
 [355,190,'Clinical laboratories','The laboratory group is linked across the upper bridge.'],
 [414,260,'Bridge decision point','A cross-campus connector meets clinical circulation.'],
 [624,385,'Day / inpatient interface','The connecting core is a key transfer and orientation point.'],
 [442,589,'Court-facing edge','The day-care wing faces the open centre of the composition.'],
 [658,728,'Repeated treatment bays','Secondary branches distribute movement off the main hall.']],
 'tata-second':[
 [590,566,'Surgical care','Operating and support spaces form the lower clinical wing.'],
 [590,188,'ICU / high-dependency care','Critical-care accommodation is grouped in the upper block.'],
 [132,590,'Academic / administration','The detached-looking wing keeps a linear room sequence.'],
 [574,380,'Clinical connector','The lobby / core connects surgery with critical care.'],
 [510,627,'Secondary distribution','Branches serve rooms off the principal surgical hall.'],
 [598,846,'Southern access node','The team’s main-hall trace reaches the end of the clinical wing.'],
 [352,610,'Open courtyard gap','The void separates the two long wings spatially.'],
 [603,101,'Critical-care room entries','Short branches limit through-movement across rooms.']],
 'mvr-site':[
 [659,174,'Main / OPD arrival','The public approach addresses the outpatient end.'],
 [303,313,'Emergency arrival','The team locates a separate arrival along Block B.'],
 [73,534,'Canteen / MEP entrance','Technical and food-service access reaches the detached block.'],
 [357,537,'Service building entrance','The separate support building has its own approach.'],
 [811,252,'Staff parking','Parking is named; a staff-only building door is not identified.'],
 [407,317,'Block B clinical spine','The long primary mass holds the inpatient / emergency axis.'],
 [620,70,'Visitor parking edge','The public parking group sits near the upper arrival side.'],
 [451,567,'Pond + planted buffer','Landscape occupies the quieter edge between built volumes.']],
 'mvr-lower':[
 [503,284,'LINAC treatment pair','Thick enclosures and turning entries organize bunker access.'],
 [564,291,'Brachytherapy / CT simulator','Preparation and simulation sit beside the treatment cluster.'],
 [604,385,'Preparation + recovery','These support spaces mediate entry into treatment.'],
 [792,337,'Curved public passage','Reception and consultation follow the curved branch.'],
 [94,166,'Canteen + kitchen','The detached public / support block has a separate approach.'],
 [334,325,'Technical service block','The isolated service mass avoids occupying the clinical wing.']],
 'mvr-ground':[
 [691,115,'OPD room sequence','Consultation and procedure rooms repeat along the long spine.'],
 [356,121,'Emergency department','Triage, examination and observation sit at the arrival end.'],
 [591,336,'Nuclear medicine','Preparation and scan rooms form a controlled lower branch.'],
 [735,327,'Radiology','Imaging rooms sit along the other part of the curved branch.'],
 [392,178,'Records + pharmacy','Support lies close to circulation and clinical distribution.'],
 [841,241,'Dining / public arrival','The curved approach becomes a major orientation junction.']],
 'mvr-first':[
 [369,125,'Hematology / laboratory','Testing rooms share a controlled internal distribution passage.'],
 [369,179,'CSSD','Packing, decontamination and sterile store are a distinct group.'],
 [423,177,'Blood bank','Donor and processing spaces are separate from CSSD.'],
 [492,170,'Endoscopy / ERCP','Preparation and recovery adjoin procedure functions.'],
 [305,196,'Staff work / lounges','Staff facilities connect to the service-side circulation.'],
 [714,340,'Academic / administration','The curved branch hosts offices and teaching spaces.']],
 'mvr-second':[
 [132,203,'Eight operating theatres','OT rooms wrap the labelled sterile corridor.'],
 [128,118,'Cath lab + sterile support','Support and staff functions occupy the upper band.'],
 [262,191,'Pre-op / post-op / induction','Holding and recovery form the patient-transfer interface.'],
 [321,208,'Surgical ICU','SICU adjoins the operating and recovery cluster.'],
 [538,111,'Infusion / day care','The right wing is a separate treatment destination.'],
 [431,163,'Pediatric infusion','The smaller branch sits close to the principal lift group.']],
 'mvr-third':[
 [124,35,'General ICU','An enclosed critical-care group anchors the left end.'],
 [228,115,'Pediatric ICU','PICU sits beside the service-side clinical cluster.'],
 [277,43,'HDU + dialysis','Intermediate care occupies the upper-left-middle band.'],
 [614,40,'Standard inpatient rooms','Repeated rooms follow the right-hand corridor.'],
 [826,66,'Suites at the end','Private accommodation terminates the ward wing.'],
 [454,160,'Core / corridor junction','Patient, visitor and service lobbies meet shared circulation.']],
 'mvr-fourth':[
 [176,34,'Molecular / microbiology labs','Readable room labels identify testing functions here.'],
 [148,92,'Nuclear medicine / isolation','A controlled department occupies the lower-left group.'],
 [226,92,'Biomedical store / workshop','Technical support sits next to the clinical service group.'],
 [632,35,'Standard rooms + suite','The long right-hand wing retains inpatient accommodation.'],
 [287,34,'Nursing / staff support','Support mediates the laboratory and accommodation zones.'],
 [447,150,'Vertical circulation junction','The cores connect into the shared ward spine.']],
 'mvr-fifth':[
 [578,63,'Standard inpatient rooms','Rooms repeat on both sides of the long corridor.'],
 [867,127,'Suite at the far end','The suite is distinct from the repeated standard rooms.'],
 [493,112,'Distributed nurse stations','Three stations reduce reliance on a single observation point.'],
 [501,221,'Patient / visitor core','Public arrival rises to the central ward junction.'],
 [297,179,'Staff / service core','Pantry, staff and service support cluster beside this core.'],
 [45,65,'End stairs','Stairs are shown at both ends of the long floor plate.']],
 'mvr-sixth':[
 [177,47,'Five-bed wards','Male and female shared wards occupy the left wing.'],
 [408,52,'Standard rooms','Individual rooms occur in two groups around the spine.'],
 [649,46,'Double rooms','The right-hand accommodation mixes another room type.'],
 [425,111,'Nursing + utility support','Stations and utilities sit at intervals along the corridor.'],
 [510,197,'Patient / visitor core','The central lobby distributes to both accommodation wings.'],
 [316,177,'Staff / service core','Soiled holding and staff support sit beside service lifts.']],
 'mvr-seventh':[
 [218,51,'BMT room cluster','Eleven rooms are shown, each with an airlock in the plan.'],
 [315,127,'Clean / soiled support','Sterile store, clean utility and soiled hold are named separately.'],
 [450,91,'Controlled BMT threshold','Airlock, changing and exam spaces define the transition.'],
 [677,60,'Deluxe rooms','Ordinary inpatient accommodation lies beyond the BMT group.'],
 [713,144,'Standard rooms / suites','The right wing contains several accommodation types.'],
 [528,216,'Patient / visitor core','The main core reaches the junction before protected care.']]
};

// Site paths retain the visible driveways; role labels describe approaches, not exclusive roads.
const ROLE_ROUTES={
 'tata-site':[
 {kind:'patient',d:'M404 612 L399 562 L324 562 L324 514 L424 514 L456 558 Q526 588 582 570 Q737 532 769 433 L822 284',label:'Patient / visitor driveway and drop-off'},
 {kind:'staff',d:'M862 159 L815 224 L695 224 Q690 191 658 193 L625 194',label:'Rear approach to staff parking'},
 {kind:'emergency',d:'M862 159 L815 224 L695 224 Q690 191 658 193 L580 194 Q544 194 544 221 L544 241',label:'Rear approach to the team-marked emergency entrance'},
 {kind:'service',d:'M220 52 L250 90 L265 107 L292 107',label:'Visible rear lane towards support; analytical service approach'}],
 'mvr-site':[
 {kind:'patient',d:'M815 8 L796 104 L754 145 L678 151 L659 174',label:'Public approach to main / OPD arrival'},
 {kind:'staff',d:'M815 8 L796 104 L826 202 L826 272',label:'Approach to staff parking; building door not assigned'},
 {kind:'emergency',d:'M815 8 L631 102 L617 139 L423 239 L296 293 L303 313',label:'Approach to the emergency arrival'},
 {kind:'service',d:'M797 104 L826 202 L826 272 L770 371 L696 447 L566 498 L357 555 L357 537',label:'Perimeter route to service building'},
 {kind:'service',d:'M357 555 L209 565 L98 561 L73 534',label:'Service-side approach to canteen / MEP'}],
 'mvr-seventh':[
 {kind:'patient',d:'M495 220 L495 111 L552 111 L552 87 L884 87 M495 111 L442 111 L442 87 L121 87',label:'Patient core to accommodation / controlled BMT threshold'},
 {kind:'staff',d:'M331 185 L331 122 L434 122 L434 87 L121 87',label:'Staff-side approach through controlled BMT zone'},
 {kind:'service',d:'M331 185 L331 122 L303 122 L303 109',label:'Service core towards support rooms; internal protocol not specified'}]
};
const ROLE_META={patient:['Patient / visitor','#dc5448'],staff:['Staff','#714dcc'],emergency:['Emergency','#d07b12'],service:['Service','#168879'],staffservice:['Staff + service','#714dcc'],main:['Main hallway','#9f0e0e'],secondary:['Secondary hallway','#1800ad'],room:['Room entry / dead end','#1800ad']};

const oldSlides=SLIDES.slice();
const A=(i)=>({...oldSlides[i],type:'annotated',id:oldSlides[i].plans?.[0]||(oldSlides[i].hospital==='tata'?'tata-site':'mvr-site'),sources:[...new Set([...oldSlides[i].sources,...(i<15?['T7']:['M2'])])],notes:(oldSlides[i].notes||'')+' Read the leader notes as architectural analysis of the supplied drawing. They identify relationships and design implications, not measured performance.'});
const F=(id,title,sub,extra={})=>({type:'annotated',id,plans:[id],title,sub,chapter:'MVR Cancer Centre',sources:['M1','M2'],notes:PLANS[id].note||'Read the original labels and the leader annotations together. Shared corridors remain shared; separate lift labels do not establish complete operational segregation.',...extra});
const T=(key,title,sub,points,extra={})=>({type:'team',key,title,sub,points,chapter:key.startsWith('tata')?'Tata Medical Center':'MVR Cancer Centre',sources:[key.startsWith('tata')?'T6':'M8','M1'].filter(k=>!key.startsWith('tata')||k!=='M1'),notes:points.map(p=>p.join(': ')).join('\n\n')+' The original team sheet is available in the source viewer. Route traces retain their source categories; they do not prove exclusive operating protocols.',...extra});
const R=(id,title,sub,points)=>({type:'roles',id,plans:[id],title,sub,points,chapter:id.startsWith('tata')?'Tata Medical Center':'MVR Cancer Centre',sources:id.startsWith('tata')?['T7','T2']:['M1','M2'],notes:'Approach analysis follows visible driveways and the team’s named destinations. Shared route segments overlap deliberately. The service approach is a planning interpretation, not a verified delivery protocol. Separate categories do not mean separate roads.'});

window.SLIDES=[
 oldSlides[0],oldSlides[1],oldSlides[2],oldSlides[3],oldSlides[4],
 {...A(5),title:'Site reading: arrivals, parking and open space',sub:'Eight annotations on the team’s site plan'},
 R('tata-site','Four journeys across the site','Patient · staff · emergency · service approaches',[
 ['Patient / visitor','Front drop-off and perimeter parking serve the public arrival.'],['Staff','The rear approach reaches the team-marked staff parking.'],['Emergency','A shared rear segment continues to the marked emergency entrance.'],['Service','The visible rear support lane is shown as an analytical approach.']]),
 A(7),A(8),
 T('tata-circ-01','Ground floor: a hierarchy of movement','Our exact main, secondary and room-entry traces',[
 ['Main hallway','The red trace organizes the primary clinical route and department links.'],['Secondary halls','Thicker blue dashed branches distribute from the main circulation.'],['Room-entry branches','Blue branches end at rooms; they are not through-routes.'],['Critical reading','Many local branches depend on a smaller set of main junctions. Clear signs matter at these decisions.']],{plan:'tata-ground',route:true}),
 T('tata-circ-04','Ground floor: our bubble relationships','Public access, controlled departments and courtyard links',[
 ['Public sequence','Lobby and courtyard act as gathering and orientation spaces in the team diagram.'],['Controlled destinations','Imaging, LINAC and service functions sit beyond the public interface.'],['Relationship strength','Solid, dashed and dotted lines retain our strong, moderate and weak connections.'],['Design implication','The courtyard has many relationships; it can orient movement without becoming a shortcut through clinical rooms.']],{bubble:true}),
 A(9),
 T('tata-circ-02','First floor: bridges and branch corridors','Our circulation analysis read at the junctions',[
 ['Cross-campus connection','The horizontal bridge links laboratories and the clinical side.'],['Clinical distribution','The main trace reaches inpatient and day-hospital circulation.'],['Local branches','Repeated room-entry branches distribute care from the main halls.'],['Design implication','The bridge-to-clinical junction needs a clear distinction between day patients, inpatients and staff destinations.']],{plan:'tata-first',route:true}),
 T('tata-circ-05','First floor: treatment, beds and testing','Our bubble diagram with a clinical relationship reading',[
 ['Treatment and nursing','The central nurses’ station relates to day-care treatment / recovery.'],['Inpatient cluster','Patient rooms relate to testing and the patient terrace.'],['Work and teaching','Administration and meeting rooms form a separate linked group.'],['Interpretation','Bubble links show functional importance; circle size is not a floor-area measurement.']],{bubble:true}),
 A(10),
 T('tata-circ-03','Second floor: controlled clinical movement','Our original hallway hierarchy on the surgical level',[
 ['Surgical main hall','The main red route runs through the long lower clinical wing.'],['Critical-care link','The connecting segment leads towards ICU / high-dependency care.'],['Room thresholds','Blue branches emphasize local entry to rooms and bays.'],['Clinical question','Patient transfer, staff access and supply handling need controlled interfaces at this shared connection.']],{plan:'tata-second',route:true}),
 T('tata-circ-06','Second floor: surgery and critical care','Our bubble relationships around the clinical threshold',[
 ['Clinical sequence','Operating suites relate strongly to pre-op and recovery.'],['Protected care','ICU and isolation form the critical-care group above.'],['Staff support','Locker rooms connect to surgical functions and controlled entry.'],['Academic wing','Admin, meeting and seminar spaces form the parallel group.']],{bubble:true}),
 oldSlides[11],oldSlides[12],oldSlides[13],oldSlides[14],
 oldSlides[15],oldSlides[16],oldSlides[17],
 {...A(18),title:'Site reading: destinations and junctions',sub:'Eight annotations on the source site geometry'},
 R('mvr-site','Four arrivals, shared site roads','Patient · staff · emergency · service approaches',[
 ['Patient / visitor','The upper approach turns toward the main / OPD arrival.'],['Staff','The perimeter segment reaches the staff parking group.'],['Emergency','The rear branch approaches the marked emergency destination.'],['Service','Support access follows the perimeter to the detached service and canteen / MEP blocks.']]),
 A(20),
 {type:'clinicaldetail',title:'Radiotherapy: entry, preparation, treatment',sub:'Department analysis on the supplied lower-ground detail',chapter:'MVR Cancer Centre',photo:'assets/details/mvr-linac-sketch.png',sources:['M1'],sequence:['Reception','Preparation / simulation','Controlled entry','Treatment'],points:[['Turning entry','The source sketch records maze-like access at the bunker.'],['Preparation interface','CT simulation, mould work and recovery support the treatment cluster.'],['Planning lesson','Keep the patient sequence legible while controlling access to technical treatment rooms.']],notes:'This is the supplied LINAC detail. The sequence is a functional interpretation; shielding thicknesses, travel distances and operating protocols are not calculated.'},
 A(21),
 T('mvr-team-23','Ground floor: our circulation network','Patient / visitor and staff / service traces from our sheet',[
 ['Public movement','The red network links the long clinical spine and curved branch.'],['Staff / service','Purple branches enter work and support rooms from the distribution corridors.'],['Emergency arrival','Our entrance marker reaches the emergency end of Block B.'],['Shared junctions','Red and purple traces meet near cores and distribution passages; the plan does not show fully separate corridor systems.']],{plan:'mvr-ground',route:true,sources:['M2','M1'],people:true}),
 {type:'clinicaldetail',title:'Emergency: arrival to triage and observation',sub:'The source department detail makes the patient route explicit',chapter:'MVR Cancer Centre',photo:'assets/details/mvr-emergency.png',sources:['M1','M2'],sequence:['Emergency arrival','Triage / assessment','Examination','Observation'],points:[['Patient flow','The emergency arrival addresses the triage and assessment group.'],['Staff response','The nurse station relates directly to observation and treatment.'],['Clinical transfer','Further transfer uses the hospital’s clinical circulation; a dedicated emergency-to-OT lift is not established by the study.']],notes:'Use the actual emergency source detail to locate triage, nurse station and observation. The sequence diagram is functional, not a measured corridor route. The source critique states that emergency and OT lack a separate connecting lift.'},
 A(22),
 T('mvr-circ-01','First floor: patient and staff / service routes','Our original two-category circulation analysis',[
 ['Patient / visitor','The red route is concentrated around the clinical department approach.'],['Staff / service','The purple route distributes through support, laboratory and academic areas.'],['Core connection','The cross-branch link is a key transfer and orientation point.'],['Interpretation','Staff and service are combined in our source. Both controls show that same source trace, rather than inventing separate corridors.']],{plan:'mvr-first',route:true,people:true}),
 T('mvr-circ-02','First floor: controlled departmental access','Our enlarged hematology and circulation analysis',[
 ['Hematology','Our note identifies sensitive testing equipment and restricted public access.'],['Staff threshold','The enlarged passage highlights entry controlled for specific staff.'],['Support interface','The clinical corridor connects laboratory and support tasks.'],['Design implication','Thresholds and access control matter where public distribution meets technical testing.']],{sources:['M8','M1']}),
 A(23),
 T('mvr-circ-03','Second floor: patient and staff distribution','Our surgical-floor routes retained on the original geometry',[
 ['Patient transfer','The patient trace reaches pre-op / recovery and the surgical interface.'],['Staff / service','The staff trace enters support rooms and the OT-side circulation.'],['Infusion branch','The right-hand day-care wing has its own distribution sequence.'],['Clinical junction','The meeting of cores, recovery and the sterile area is the most important control point.']],{plan:'mvr-second',route:true,people:true}),
 T('mvr-ot-flows','Inside the OT cluster: three line systems','Our enlarged sterile, clean and dirty circulation figure',[
 ['Sterile · cyan','The inner corridor serves the theatre entrances and controlled transfer.'],['Clean · lime','The upper passage links clean support functions.'],['Dirty · orange','The outer rear corridor runs behind the theatre group.'],['Control points','Our sheet identifies airlocks and changing areas at the patient and staff interfaces.']],{ot:true,sources:['M8','M1']}),
 A(24),
 F('mvr-fourth','Fourth floor: laboratories and inpatient care','Read the actual room labels across the long floor plate'),
 F('mvr-fifth','Fifth floor: repeated rooms, distributed nursing','A linear ward with two distinct core groups'),
 F('mvr-sixth','Sixth floor: a mix of inpatient room types','Five-bed wards, standard rooms and double rooms'),
 F('mvr-seventh','Seventh floor: the protected BMT threshold','Airlocks and support spaces define the controlled zone'),
 R('mvr-seventh','BMT: control at the threshold','Patient, staff and support approaches on the source plan',[
 ['Patient','The patient core reaches the junction between ordinary accommodation and BMT.'],['Staff','The staff-side approach meets the changing / airlock sequence.'],['Service','Clean utility, sterile store and soiled hold are distinct destinations.'],['Planning lesson','The controlled boundary matters more than coloring the entire corridor as exclusive.']]),
 {type:'mvrbubble',title:'MVR: a bubble diagram of clinical relationships',sub:'Derived from our zoning and the original floor stack',chapter:'MVR Cancer Centre',sources:['M1','M2','M8'],notes:'A new schematic derived from readable departments. Solid links show same-level relationships; dashed links show relationships across floors. Position and bubble size are not measured plan geometry. The clean/dirty flow detail remains in the preceding original OT analysis.'},
 oldSlides[27],oldSlides[28],
 {type:'comparisonboard',title:'Our comparative analysis',sub:'The team’s synthesis of healing space, form and circulation',chapter:'Comparative analysis',sources:['C1','T2','M1'],notes:'This is the supplied comparison board. Its conceptual illustrations support the team’s argument; use the actual source plans for geometry. The phrase strong separation is interpreted as differentiated destinations and controlled thresholds, not proof of complete traffic segregation.'},
 oldSlides[29],
 {type:'synthesis',title:'What the plan analysis teaches us',sub:'Three architectural decisions to carry into the design project',chapter:'Design conclusions',sources:['T2','T6','M1','M8'],notes:'Conclude with specific architectural lessons: arrival clarity, controlled clinical interfaces and readable circulation with landscape. These are design deductions from the studied drawings and the team analyses.'}
];
SLIDES.forEach((s,i)=>s.number=i+1);
